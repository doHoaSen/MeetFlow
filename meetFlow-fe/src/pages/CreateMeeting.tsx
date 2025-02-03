import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateMeeting: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [dateType, setDateType] = useState("specific"); // 'specific' or 'days'
  const [specificDates, setSpecificDates] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("20:00");
  const navigate = useNavigate();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const toggleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleDateSelection = (date: string) => {
    setSpecificDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  const createEvent = async () => {
    if (!eventName) return alert("이벤트 이름을 입력하세요.");
    if (dateType === "specific" && specificDates.length === 0) return alert("날짜를 선택하세요.");
    if (dateType === "days" && selectedDays.length === 0) return alert("요일을 선택하세요.");

    try {
      const res = await axios.post("http://localhost:8000/api/events/", {
        name: eventName,
        dateType,
        dates: dateType === "specific" ? specificDates : selectedDays,
        startTime,
        endTime,
      });

      navigate(`/event/${res.data.id}`);
    } catch (error) {
      console.error("이벤트 생성 실패:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>When2Meet Clone</h1>

      {/* 이벤트 이름 입력 */}
      <input
        type="text"
        placeholder="이벤트 이름"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        style={{ padding: "10px", margin: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "300px" }}
      />

      {/* 날짜 선택 방식 */}
      <div style={{ marginTop: "20px" }}>
        <label>
          <input type="radio" name="dateType" value="specific" checked={dateType === "specific"} onChange={() => setDateType("specific")} />
          Specific Dates
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input type="radio" name="dateType" value="days" checked={dateType === "days"} onChange={() => setDateType("days")} />
          Days of the Week
        </label>
      </div>

      {/* Specific Dates 선택 */}
      {dateType === "specific" && (
        <input
          type="date"
          onChange={(e) => toggleDateSelection(e.target.value)}
          style={{ marginTop: "10px", padding: "5px" }}
        />
      )}

      {/* 선택된 Specific Dates 목록 */}
      {dateType === "specific" && specificDates.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <strong>Selected Dates:</strong> {specificDates.join(", ")}
        </div>
      )}

      {/* Days of the Week 선택 */}
      {dateType === "days" && (
        <div style={{ marginTop: "10px" }}>
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDaySelection(day)}
              style={{
                margin: "5px",
                padding: "5px",
                background: selectedDays.includes(day) ? "blue" : "gray",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
            >
              {day}
            </button>
          ))}
        </div>
      )}

      {/* 시간 선택 */}
      <div style={{ marginTop: "20px" }}>
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} style={{ marginLeft: "10px" }} />
        <label style={{ marginLeft: "20px" }}>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} style={{ marginLeft: "10px" }} />
      </div>

      {/* 이벤트 생성 버튼 */}
      <button onClick={createEvent} style={{ marginTop: "20px", padding: "10px", background: "blue", color: "white", borderRadius: "5px" }}>
        Ready? Create Event
      </button>
    </div>
  );
};

export default CreateMeeting;

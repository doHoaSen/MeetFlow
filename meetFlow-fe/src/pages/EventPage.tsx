import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
    const {eventId} = useParams();
    const [event, setEvent] = useState<{id: string; name: string} | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/events/${eventId}`)
        .then((res) => setEvent(res.data))
        .catch((err) => console.error("이벤트 불러오기 실패: ", err));
    }, [eventId]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          {event ? (
            <>
              <h1>{event.name}</h1>
              <p>시간을 선택하세요.</p>
              {/* 여기에 가능한 시간 선택 UI 추가 예정 */}
            </>
          ) : (
            <p>이벤트를 불러오는 중...</p>
          )}
        </div>
      );
    };
    
export default EventPage;
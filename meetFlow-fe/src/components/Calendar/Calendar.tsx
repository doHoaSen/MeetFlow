import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isToday } from 'date-fns';
import Header from './Header.tsx';
import Days from './Days.tsx';
import Cells from './Cells.tsx';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);

  const startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 0 }); // 일요일 시작
  const endOfWeekDate = endOfWeek(endOfMonthDate, { weekStartsOn: 0 });

  // 이번 달의 날짜들
  const daysInMonth = eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate });

  // 월 변경
  const goToPreviousMonth = () => setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  const goToNextMonth = () => setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <div className="calendar">
      <Header currentDate={currentDate} goToPreviousMonth={goToPreviousMonth} goToNextMonth={goToNextMonth} />
      <Days />
      <Cells daysInMonth={daysInMonth} />
    </div>
  );
};

export default Calendar;

import React from 'react';
import { format, isToday } from 'date-fns';

interface CellsProps {
  daysInMonth: Date[];
}

const Cells: React.FC<CellsProps> = ({ daysInMonth }) => {
  return (
    <div className="calendar-days">
      {daysInMonth.map((day, index) => (
        <div key={index} className={`calendar-day ${isToday(day) ? 'today' : ''}`}>
          {format(day, 'd')}
        </div>
      ))}
    </div>
  );
};

export default Cells;

import React from 'react';
import { format } from 'date-fns';

interface HeaderProps {
  currentDate: Date;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentDate, goToPreviousMonth, goToNextMonth }) => {
  return (
    <div className="calendar-header">
      <button className="nav-button" onClick={goToPreviousMonth}>
        &lt;
      </button>
      <span className="current-month">{format(currentDate, 'MMMM yyyy')}</span>
      <button className="nav-button" onClick={goToNextMonth}>
        &gt;
      </button>
    </div>
  );
};

export default Header;

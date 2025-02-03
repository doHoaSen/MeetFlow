import React from 'react';

const Days: React.FC = () => {
  return (
    <div className="calendar-weekdays">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="calendar-weekday">
          {day}
        </div>
      ))}
    </div>
  );
};

export default Days;

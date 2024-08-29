import React from 'react';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Hours = () => {
  const today = new Date().getDay();
  const isWeekend = today === 0 || today === 6;

  const openingHours = isWeekend ? '9 AM to 8 PM' : '10 AM to 4 PM';

  return (
    <div className="hours">
      <h2>Today's Hours</h2>
      <p>
        {daysOfWeek[today]}:
        <span> {openingHours}</span>
      </p>
    </div>
  );
};

export default Hours;
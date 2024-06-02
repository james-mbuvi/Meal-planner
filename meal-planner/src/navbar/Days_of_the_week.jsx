import { useState } from 'react';

export const Weekdays = ({ day, onClick, hidden }) => {
  return (
    <div
      className={`bg-green-500 hover:bg-green-700 px-6 py-1 rounded-full text-base font-medium inline-block cursor-pointer text-white ${hidden ? 'hidden md:inline-block' : ''}`}
      onClick={() => onClick(day)}
    >
      {day}
    </div>
  );
};

export const Days_of_the_week = ({ days, onClick }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handleNext = () => {
    const nextDayIndex = (currentDayIndex + 1) % days.length;
    setCurrentDayIndex(nextDayIndex);
    onClick(days[nextDayIndex]);
  };

  const handlePrev = () => {
    const prevDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    setCurrentDayIndex(prevDayIndex);
    onClick(days[prevDayIndex]);
  };

  return (
    <div className="space-x-11 text-center text-xl mb-8 justify-stretch mt-6">
      <button className="md:hidden text-lg" onClick={handlePrev}>Prev</button>
      {days.map((day, index) => (
        <Weekdays key={index} day={day} onClick={() => onClick(day)} hidden={index !== currentDayIndex} />
      ))}
      <button className="md:hidden text-lg" onClick={handleNext}>Next</button>
    </div>
  );
};

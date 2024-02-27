import { useState } from 'react';
import CalDays from '../../components/calendar/CalDays';
import { addWeeks, subWeeks } from 'date-fns';
import CalHeaderW from '../../components/calendar/CalHeaderW';
import CalDateW from '../../components/calendar/CalDateW';
import CalBodyW from '../../components/calendar/CalBodyW';

const WeeklyContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  const nextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  return (
    <div className="weekly">
      <CalHeaderW
        currentWeek={currentWeek}
        prevWeek={prevWeek}
        nextWeek={nextWeek}
      />
      <CalDays
        currentMonth={currentMonth}
        currentWeek={currentWeek}
        prevWeek={prevWeek}
        nextWeek={nextWeek}
      />
      <CalDateW currentWeek={currentWeek} />
      <CalBodyW />
    </div>
  );
};

export default WeeklyContainer;

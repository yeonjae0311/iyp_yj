import { useEffect, useState } from 'react';
import CalDays from '../../components/calendar/CalDays';
import { addWeeks, subWeeks } from 'date-fns';
import CalHeaderW from '../../components/calendar/CalHeaderW';
import CalDateW from '../../components/calendar/CalDateW';
import CalBodyW from '../../components/calendar/CalBodyW';
import { apiCheckSchedule } from '../../api/cal';
import ModalUpdateContainer from './ModalUpdateContainer';

const WeeklyContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [scheId, setScheId] = useState('');
  const [toDo, setTodo] = useState([
    {
      stitle: '',
      scontent: '',
      scolor: '',
      sdate: '',
      scheId: '',
    },
  ]);
  const [toDoUp, setTodoUp] = useState([
    {
      stitle: '',
      scontent: '',
      scolor: '',
      sdate: '',
      scheId: '',
    },
  ]);

  const prevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  const nextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  const updateModal = (e) => {
    setIsUpdateOpen(true);
  };

  useEffect(() => {
    apiCheckSchedule().then((todo) => {
      setTodo(todo.data);
    });
  }, [currentWeek]);

  const closeUpdateModal = (e) => {
    e.stopPropagation();
    setIsUpdateOpen(false);
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
      {isUpdateOpen && (
        <ModalUpdateContainer
          toDoUp={toDoUp}
          selectedDate={selectedDate}
          setIsUpdateOpen={setIsUpdateOpen}
          closeUpdateModal={closeUpdateModal}
          scheId={scheId}
        />
      )}
      <CalBodyW
        currentMonth={currentMonth}
        toDo={toDo}
        updateModal={updateModal}
      />
    </div>
  );
};

export default WeeklyContainer;

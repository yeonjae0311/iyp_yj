import { useEffect, useState } from 'react';
import CalHeader from '../../components/calendar/CalHeader';
import CalBody from '../../components/calendar/CalBody';
import CalDays from '../../components/calendar/CalDays';
import { subMonths, addMonths } from 'date-fns';
import CalTodo from '../../components/calendar/CalTodo';
import ModalContainer from './ModalContainer';
import { apiCheckSchedule } from '../../api/cal';

const MonthlyContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [toDo, setTodo] = useState([
    {
      stitle: '',
      scontent: '',
      scolor: '',
      sdate: '',
      scheId: '',
    },
  ]);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (cloneday) => {
    setSelectedDate(cloneday);
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    apiCheckSchedule().then((todo) => {
      setTodo(todo.data);
      console.log(toDo);
    });
  }, [currentMonth]);

  return (
    <div className="monthly">
      <CalTodo currentMonth={currentMonth} toDo={toDo} />
      <div className="calendar">
        <CalHeader
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <CalDays />
        {isOpen && (
          <ModalContainer
            selectedDate={selectedDate}
            setIsOpen={setIsOpen}
            closeModal={closeModal}
          />
        )}
        <CalBody
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default MonthlyContainer;

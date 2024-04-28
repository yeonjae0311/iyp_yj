import { useEffect, useState } from 'react';
import CalHeader from '../../components/calendar/CalHeader';
import CalBody from '../../components/calendar/CalBody';
import CalDays from '../../components/calendar/CalDays';
import { subMonths, addMonths } from 'date-fns';
import CalTodo from '../../components/calendar/CalTodo';
import ModalContainer from './ModalContainer';
import { apiCheckSchedule, apiSelectSchedule } from '../../api/cal';
import ModalUpdateContainer from './ModalUpdateContainer';

const MonthlyContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
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

  const updateModal = (e) => {
    const data = { sidx: e.target.id };
    setScheId(e.target.id);
    apiSelectSchedule(data).then((res) => {
      setTodoUp(res);
    });
    setIsUpdateOpen(true);
  };

  const closeUpdateModal = (e) => {
    e.stopPropagation();
    setIsUpdateOpen(false);
  };

  useEffect(() => {
    apiCheckSchedule().then((todo) => {
      setTodo(todo.data);
    });
  }, [currentMonth]);

  return (
    <div className="monthly">
      <CalTodo
        currentMonth={currentMonth}
        toDo={toDo}
        updateModal={updateModal}
      />
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
        {isUpdateOpen && (
          <ModalUpdateContainer
            toDoUp={toDoUp}
            selectedDate={selectedDate}
            setIsUpdateOpen={setIsUpdateOpen}
            closeUpdateModal={closeUpdateModal}
            scheId={scheId}
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

import { format } from 'date-fns';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';
import { TodoDiv } from '../commons/TodoStyle';
import { useEffect, useState } from 'react';

const CalTodo = ({ currentMonth, toDo, updateModal, setKey }) => {
  const [todos, setTodos] = useState();

  useEffect(
    () =>
      setTodos(
        toDo.sdate !== ''
          ? toDo
              .filter(
                (toDo) =>
                  toDo.sdate.substr(5, 2) === format(currentMonth, 'MM'),
              )
              .map((toDo) => (
                <div onClick={updateModal} key={toDo.scheId} id={toDo.scheId}>
                  {toDo.sdate.substr(5, 5)} : {toDo.stitle}
                </div>
              ))
          : null,
      ),
    [toDo],
  );

  return (
    <div className="monthly_todo">
      <div>
        <SubTitle>{format(currentMonth, 'yyyy')}</SubTitle>
        <MiniTitle>To-Do</MiniTitle>
        <TodoDiv>{todos}</TodoDiv>
      </div>
    </div>
  );
};

export default CalTodo;

import { format } from 'date-fns';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';
import { TodoDiv } from '../commons/TodoStyle';

const CalTodo = ({ currentMonth, toDo }) => {
  const todos =
    toDo[0].s_title !== ''
      ? toDo.map((toDo) => (
          <div key={toDo.scheId}>
            {format(toDo.s_date, 'MM/dd')}일 : {toDo.s_title}
          </div>
        ))
      : null;
  return (
    <div className="monthly_todo">
      <div>
        <SubTitle>
          {format(currentMonth, 'yyyy')}.{format(currentMonth, 'MM')}
        </SubTitle>
        <MiniTitle>To-Do</MiniTitle>
        <TodoDiv>{todos}</TodoDiv>
      </div>
    </div>
  );
};

export default CalTodo;

import { format } from 'date-fns';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';

const CalTodo = ({ currentMonth, toDo }) => {
  if (!toDo) {
    return null;
  }
  return (
    <div className="monthly_todo">
      <div>
        <SubTitle>
          {format(currentMonth, 'yyyy')}.{format(currentMonth, 'MM')}
        </SubTitle>
        <MiniTitle>To-do</MiniTitle>
        <div>
          <div key={toDo.sidx} content={toDo.content}></div>
        </div>
      </div>
    </div>
  );
};

export default CalTodo;

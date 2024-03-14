import { format } from 'date-fns';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';

const CalTodo = ({ currentMonth }) => {
  return (
    <div className="monthly_todo">
      <div>
        <SubTitle>
          {format(currentMonth, 'yyyy')}.{format(currentMonth, 'MM')}
        </SubTitle>
        <MiniTitle>To-do</MiniTitle>
        <div>리스트</div>
      </div>
    </div>
  );
};

export default CalTodo;

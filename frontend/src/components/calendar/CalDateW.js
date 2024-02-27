import { addDays, format, startOfWeek } from 'date-fns';

const CalDateW = ({ currentWeek }) => {
  const weekStart = startOfWeek(currentWeek);
  const startDate = startOfWeek(weekStart);

  let date = startDate;
  let dates = [];
  let formattedDate = '';

  for (let i = 0; i < 7; i++) {
    formattedDate = format(date, 'd');
    dates.push(
      <div className={'col' + (i === 0 ? ' sun' : '')} key={i}>
        {formattedDate}
      </div>,
    );
    date = addDays(date, 1);
  }

  return <div className="date">{dates}</div>;
};

export default CalDateW;

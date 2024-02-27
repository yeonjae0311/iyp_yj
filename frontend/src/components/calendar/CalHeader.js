import { format } from 'date-fns';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const CalHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="header row">
      <div className="col col-start">
        <span className="text">
          <span className="text month">{format(currentMonth, 'MM')}</span>
          {format(currentMonth, 'yyyy')}
        </span>
      </div>
      <div className="col col-end">
        <IoIosArrowDropleft onClick={prevMonth} />
        <IoIosArrowDropright onClick={nextMonth} />
      </div>
    </div>
  );
};

export default CalHeader;

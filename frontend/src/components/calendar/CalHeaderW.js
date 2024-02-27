import { format } from 'date-fns';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const CalHeaderW = ({ currentWeek, prevWeek, nextWeek }) => {
  return (
    <div className="header_w row">
      <div className="col col-start">
        <span className="text">
          <span className="text month">{format(currentWeek, 'MM')}</span>
          <span>{format(currentWeek, 'yyyy')}</span>
          <span className="week_btn">
            <IoIosArrowDropleft onClick={prevWeek} />
            <IoIosArrowDropright onClick={nextWeek} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default CalHeaderW;

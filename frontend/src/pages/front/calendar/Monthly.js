import { Helmet } from 'react-helmet-async';
import MonthlyContainer from '../../../containers/calendar/MonthlyContainer';
import '../../../styles/calendar/Monthly.scss';

const Monthly = () => {
  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      <MonthlyContainer />
    </>
  );
};

export default Monthly;

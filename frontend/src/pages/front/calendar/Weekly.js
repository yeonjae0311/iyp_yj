import { Helmet } from 'react-helmet-async';
import WeeklyContainer from '../../../containers/calendar/WeeklyContainer';
import '../../../styles/calendar/Weekly.scss';

const Weekly = () => {
  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      <WeeklyContainer />
    </>
  );
};

export default Weekly;

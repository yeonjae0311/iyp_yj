import { Helmet } from 'react-helmet-async';
import SettingsContaitner from '../../../containers/settings/SettingsContainer';

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      <SettingsContaitner />
    </>
  );
};

export default Settings;

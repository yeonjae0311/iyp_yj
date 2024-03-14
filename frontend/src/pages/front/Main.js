import React, { useContext } from 'react';
import UserContext from '../../modules/UserContext';
import MainOn from './MainOn';
import MainOut from './MainOut';

const Main = () => {
  const userContext = useContext(UserContext);
  const {
    state: { isLogin },
  } = userContext;
  return isLogin ? <MainOn /> : <MainOut />;
};

export default React.memo(Main);

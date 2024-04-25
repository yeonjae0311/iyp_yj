import React, { useContext, useEffect } from 'react';
import UserContext from '../../modules/UserContext';
import MainOn from './MainOn';
import MainOut from './MainOut';

const Main = () => {
  const userContext = useContext(UserContext);
  const {
    state: { isLogin },
    actions: { setIsLogin },
  } = userContext;

  useEffect(() => {
    if (localStorage.getItem('iyp_access_token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return isLogin ? <MainOn /> : <MainOut />;
};

export default React.memo(Main);

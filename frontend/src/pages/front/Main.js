import React, { useContext } from 'react';
import UserContext from '../../modules/user';
import MainFormOn from '../../components/MainFormOn';
import MainFormOut from '../../components/MainFormOut';
import { Helmet } from 'react-helmet-async';

const Main = () => {
  const {
    state: { isLogin, userInfo },
    actions: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  // 임시 테스트용 삭제 해야함
  const handleClick = () => {
    setIsLogin(!isLogin);
    setUserInfo({ userNm: '최연재' });
  };

  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      {isLogin ? <MainFormOut /> : <MainFormOn userInfo={userInfo} />}
      <button onClick={handleClick}>isLogin</button>
    </>
  );
};

export default React.memo(Main);

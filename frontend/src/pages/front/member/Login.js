import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginContainer from '../../../containers/member/LoginContainer';
import UserContext from '../../../modules/user';

const Login = () => {
  const { t } = useTranslation();
  const {
    actions: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <LoginContainer setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
    </>
  );
};

export default Login;

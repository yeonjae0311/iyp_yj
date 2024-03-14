import '../../styles/outlines/Header.scss';
import eng from '../../images/lang/america.png';
import kor from '../../images/lang/kor.png';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import UserContext from '../../modules/UserContext';

const Header = () => {
  const { t } = useTranslation();
  const userContext = useContext(UserContext);
  const {
    actions: { setIsLogin, setUserInfo },
    state: { isLogin },
  } = userContext;

  const onClick = () => {
    sessionStorage.removeItem('user');
    setIsLogin(false);
    setUserInfo(null);
  };

  return (
    <header className="Header">
      <NavLink to="/" className="logo">
        I'm Your Planner!
      </NavLink>
      <div className="btn">
        <div className="imgDiv">
          <img
            src={eng}
            className="lang"
            alt="english"
            onClick={() => i18n.changeLanguage('en')}
          />
          <img
            src={kor}
            className="lang"
            alt="korean"
            onClick={() => i18n.changeLanguage('ko')}
          />
        </div>
        {isLogin ? (
          <>
            <NavLink to="/" className="member" onClick={onClick}>
              {t('로그아웃')}
            </NavLink>
            <NavLink to="settings" className="member">
              {t('설정')}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/sign-in" className="member">
              {t('로그인')}
            </NavLink>
            <NavLink to="/join" className="member">
              {t('회원가입')}
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);

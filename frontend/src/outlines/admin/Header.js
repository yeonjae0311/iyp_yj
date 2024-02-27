import '../../styles/outlines/Header.scss';
import eng from '../../images/lang/america.png';
import kor from '../../images/lang/kor.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="logo">
        I'm Your Planner!
      </NavLink>
      <div className="btn">
        <div className="imgDiv">
          <img src={eng} className="lang" alt="english" />
          <img src={kor} className="lang" alt="korean" />
        </div>
        <NavLink to="/sign-in" className="member">
          Sign-in
        </NavLink>
        <NavLink to="/join" className="member">
          Join
        </NavLink>
      </div>
    </header>
  );
};

export default React.memo(Header);

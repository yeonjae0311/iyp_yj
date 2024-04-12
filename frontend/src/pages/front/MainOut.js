import styled from 'styled-components';
import { BigButton } from '../../components/commons/ButtonStyle';
import { SubTitle } from '../../components/commons/TitleStyle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { check } from '../../api/member';

const MainOut = ({ setIsLogin, setUserInfo }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const MainDiv = styled.div`
    margin-top: 100px;

    .btn {
      flex-direction: column;
      align-items: center;
      margin-top: 140px;
    }
  `;

  const cookieTestClick = () => {
    check().then((res) => console.log(res));
  };

  const handleClick = (e) => {
    const { name } = e.target;
    navigate(name);
  };

  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      <MainDiv>
        <SubTitle size="2rem" align="center">
          {t('인사말')}
        </SubTitle>
        <div className="btn">
          <BigButton
            onClick={handleClick}
            name="sign-in"
            color="#d9d9d9"
            height="100px"
            width="450px"
          >
            {t('로그인')}
          </BigButton>
          <BigButton
            onClick={handleClick}
            name="join"
            color="#d9d9d9"
            height="100px"
            width="450px"
          >
            {t('회원가입')}
          </BigButton>
          <BigButton onClick={cookieTestClick}>test</BigButton>
        </div>
      </MainDiv>
    </>
  );
};

export default React.memo(MainOut);

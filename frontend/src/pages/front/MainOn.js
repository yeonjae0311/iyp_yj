import styled from 'styled-components';
import { BigButton } from '../../components/commons/ButtonStyle';
import { SubTitle } from '../../components/commons/TitleStyle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { formattedDate, formattedDateEn } from '../../modules/date';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import UserContext from '../../modules/UserContext';

const MainOn = () => {
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

  const userContext = useContext(UserContext);

  const {
    state: { userInfo },
  } = userContext;

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
          {t(`인사말로그인후`, {
            userNm: userInfo.name,
            formattedDateEn: formattedDateEn,
            formattedDate: formattedDate,
          })}
        </SubTitle>
        <div className="btn">
          <BigButton
            onClick={handleClick}
            name="monthly"
            color="#d9d9d9"
            height="100px"
            width="450px"
          >
            {t('월별로 보기')}
          </BigButton>
          <BigButton
            onClick={handleClick}
            name="weekly"
            color="#d9d9d9"
            height="100px"
            width="450px"
          >
            {t('주별로 보기')}
          </BigButton>
        </div>
      </MainDiv>
    </>
  );
};

export default React.memo(MainOn);

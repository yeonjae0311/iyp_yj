import styled from 'styled-components';
import { BigButton } from '../../components/commons/ButtonStyle';
import { SubTitle } from '../../components/commons/TitleStyle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { formattedDate, formattedDateEn } from '../../modules/date';
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import UserContext from '../../modules/UserContext';
import { apiMemberInfo } from '../../api/member';
import { id } from 'date-fns/locale';

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
    actions: { setUserInfo },
  } = userContext;

  const handleClick = (e) => {
    const { name } = e.target;
    navigate(name);
  };

  const data = {
    id: 'id',
    token: 'token',
  };

  const profile = (data) => {
    apiMemberInfo(data)
      .then((profile) => {
        if (profile !== null) {
          setUserInfo(profile.data.name);
        }
      })
      .catch((err) => {
        alert('불러오기 실패');
      });
  };

  useEffect(() => profile(), []);

  return (
    <>
      <Helmet>
        <title>I'm Your Planner!</title>
      </Helmet>
      <MainDiv>
        <SubTitle size="2rem" align="center">
          {t(`인사말로그인후`, {
            userNm: userInfo,
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

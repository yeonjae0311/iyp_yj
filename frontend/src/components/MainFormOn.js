import styled from 'styled-components';
import { BigButton } from './commons/ButtonStyle';
import { SubTitle } from './commons/TitleStyle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { formattedDate, formattedDateEn } from '../modules/date';

const MainForm = () => {
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

  const userInfo = '최연재';

  const handleClick = (e) => {
    const { name } = e.target;
    navigate(name);
  };

  return (
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
  );
};

export default MainForm;

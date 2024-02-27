import styled from 'styled-components';
import { BigButton } from './commons/ButtonStyle';
import { SubTitle } from './commons/TitleStyle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const MainForm = ({ setIsLogin, setUserInfo }) => {
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

  const handleClick = (e) => {
    const { name } = e.target;
    navigate(name);
  };

  return (
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
      </div>
    </MainDiv>
  );
};

export default MainForm;

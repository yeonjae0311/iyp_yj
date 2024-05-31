import styled from 'styled-components';
import { BigText, SmallText } from '../../components/commons/ButtonStyle';
import { useNavigate } from 'react-router-dom';

const SettingsContaitner = () => {
  const UserInfoDiv = styled.div`
    padding-top: 100px;
    width: 230px;
  `;
  const navigate = useNavigate();

  const OnClick = () => {
    navigate('/settings/edit');
  };

  return (
    <UserInfoDiv>
      <BigText size={'extraBig'} height={'90px'}>
        회원정보
      </BigText>
      <SmallText size={'big'} onClick={OnClick}>
        - 회원 정보 수정
      </SmallText>
      <SmallText size={'big'}>- 탈퇴하기</SmallText>
    </UserInfoDiv>
  );
};

export default SettingsContaitner;

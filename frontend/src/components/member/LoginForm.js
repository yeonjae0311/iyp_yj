import { InputText } from '../commons/InputStyle';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import React from 'react';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';
import { Link } from 'react-router-dom';
import { FormBox } from '../commons/BoxStyle';
import loadable from '@loadable/component';

const Message = loadable(() => import('../commons/Message'));

const FormBoxLog = styled(FormBox)`
  .btn {
    display: flex;
    width: 50%;
    padding-top: 35px;

    .btnA {
      background: white;
      width: 100%;
      color: black;
      border: 0;
      cursor: pointer;
      font-weight: bold;
      text-decoration-line: none;
      text-align: center;
    }
  }

  .text {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    width: 430px;
    align-items: center;
  }
`;

const LoginForm = ({ onChange, onSubmit, form, errors }) => {
  const { t } = useTranslation();

  return (
    <FormBoxLog onSubmit={onSubmit}>
      <SubTitle size="25px">{t("I'm Your Planner")}</SubTitle>
      <div className="text">
        <MiniTitle size={'1.2rem'}>{t('아이디')}</MiniTitle>
        <InputText type="text" name="id" value={form.id} onChange={onChange} />
      </div>

      <Message>{errors.id}</Message>

      <div className="text">
        <MiniTitle size={'1.2rem'}>{t('비밀번호')}</MiniTitle>
        <InputText
          type="password"
          name="password"
          onChange={onChange}
          value={form.password}
        />
      </div>

      <Message>{errors.password}</Message>

      <div className="btn">
        <button className="btnA" type="submit">
          {t('로그인')}
        </button>
        <Link to="/join" className="btnA">
          {t('회원가입')}
        </Link>
      </div>
    </FormBoxLog>
  );
};

export default React.memo(LoginForm);

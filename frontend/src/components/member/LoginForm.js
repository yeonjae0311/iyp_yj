import { InputText } from '../commons/InputStyle';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';
import { Link } from 'react-router-dom';
import { FormBox } from '../commons/BoxStyle';
import loadable from '@loadable/component';

const Message = loadable(() => import('../commons/Message'));

const LoginForm = ({ onSubmit, errors, set }) => {
  const { t } = useTranslation();

  const FormBoxLog = styled(FormBox)`
    .btn {
      display: flex;
      width: 50%;
      padding-top: 10px;

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
      margin-bottom: 20px;
      justify-content: space-between;
      width: 430px;
      align-items: center;
    }
  `;

  errors = errors || {};

  const refEmail = useRef();

  useEffect(() => {
    refEmail.current.focus();
  }, [refEmail]);

  return (
    <FormBoxLog onSubmit={() => onSubmit}>
      <SubTitle size="25px">{t("I'm Your Planner")}</SubTitle>
      <div className="text">
        <MiniTitle size={'1.2rem'}>{t('아이디')}</MiniTitle>
        <InputText type="text" name="id" ref={refEmail} />
      </div>
      <div className="text">
        <MiniTitle size={'1.2rem'}>{t('비밀번호')}</MiniTitle>
        <InputText type="password" name="password" />{' '}
      </div>

      {errors.email && errors.email.message && (
        <Message>{errors.email.message}</Message>
      )}
      {errors.password && errors.password.message && (
        <Message>{errors.password.message}</Message>
      )}

      <div className="btn">
        <Link to="/login?" className="btnA">
          {t('로그인')}
        </Link>
        <Link to="/join" className="btnA">
          {t('회원가입')}
        </Link>
      </div>
    </FormBoxLog>
  );
};

export default React.memo(LoginForm);

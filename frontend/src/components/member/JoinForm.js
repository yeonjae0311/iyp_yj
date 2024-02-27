import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { SubTitle } from '../commons/TitleStyle';
import { FormBox } from '../commons/BoxStyle';
import React, { useEffect, useRef } from 'react';
import { InputText } from '../commons/InputStyle';
import loadable from '@loadable/component';
import { SubmitButton } from '../commons/ButtonStyle';

const ErrorMessages = loadable(() => import('../commons/ErrorMessages'));

const JoinForm = (errors) => {
  const { t } = useTranslation();

  const Text = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  `;

  const JoinText = styled(InputText)`
    margin-bottom: 15px;
  `;

  const JoinTitle = styled(SubTitle)`
    margin-bottom: 60px;
  `;

  const FormBoxJo = styled(FormBox)`
    margin-top: 80px;

    .btn {
      display: flex;
      width: 50%;
      padding-top: 55px;

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
  `;

  errors = errors || {};

  const refEmail = useRef();

  useEffect(() => {
    refEmail.current.focus();
  }, [refEmail]);

  return (
    <FormBoxJo width="537px" height="690px">
      <JoinTitle size="25px">{t("I'm Your Planner")}</JoinTitle>
      <div>
        <Text>{t('이메일')}</Text>
        <JoinText type="text" name="id" ref={refEmail} />
        <ErrorMessages errors={errors} field="email" />
      </div>
      <div className="form_input">
        <Text>{t('이름')}</Text>
        <JoinText name="name" />
        <ErrorMessages errors={errors} field="name" />
      </div>
      <div className="form_input">
        <Text>{t('아이디')}</Text>
        <JoinText name="id" />
        <ErrorMessages errors={errors} field="id" />
      </div>
      <div className="form_input">
        <Text>{t('비밀번호')}</Text>
        <JoinText type="password" name="password" />
        <ErrorMessages errors={errors} field="pw" />
      </div>
      <div className="form_input">
        <Text>{t('비밀번호 확인')}</Text>
        <JoinText type="password" name="confirmPw" />
        <ErrorMessages errors={errors} field="confirmPw" />
      </div>
      <div className="btn">
        <SubmitButton>{t('가입하기')}</SubmitButton>
      </div>
    </FormBoxJo>
  );
};

export default React.memo(JoinForm);

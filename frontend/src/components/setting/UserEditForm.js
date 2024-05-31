import styled from 'styled-components';
import { FormBox } from '../commons/BoxStyle';
import { SubTitle } from '../commons/TitleStyle';
import { InputText } from '../commons/InputStyle';
import ErrorMessages from '../commons/ErrorMessages';
import { useTranslation } from 'react-i18next';
import { SubmitButton } from '../commons/ButtonStyle';
import { useRef } from 'react';

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

const UserEditForm = (onChange, onSubmit, form, errors) => {
  const { t } = useTranslation();

  const Text = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
  `;

  const JoinTitle = styled(SubTitle)`
    margin-bottom: 60px;
  `;

  const refEmail = useRef();

  return (
    <FormBoxJo width="537px" height="690px" onSubmit={onSubmit}>
      <JoinTitle size="25px">{t("I'm Your Planner")}</JoinTitle>
      <div>
        <Text>{t('이메일')}</Text>
        <InputText
          type="text"
          name="email"
          value={form.email}
          onChange={onChange}
          ref={refEmail}
        />
        <ErrorMessages errors={errors} field="email" />
      </div>
      <div className="form_input">
        <Text>{t('이름')}</Text>
        <InputText name="name" value={form.name} onChange={onChange} />
        <ErrorMessages errors={errors} field="name" />
      </div>
      <div className="form_input">
        <Text>{t('비밀번호')}</Text>
        <InputText
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />
        <ErrorMessages errors={errors} field="password" />
      </div>
      <div className="form_input">
        <Text>{t('비밀번호 확인')}</Text>
        <InputText
          type="password"
          name="passwordCheck"
          value={form.passwordCheck}
          onChange={onChange}
        />
        <ErrorMessages errors={errors} field="passwordCheck" />
      </div>
      <div className="btn">
        <SubmitButton type="submit">{t('수정하기')}</SubmitButton>
      </div>
    </FormBoxJo>
  );
};

export default UserEditForm;

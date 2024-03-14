import React, { useState, useCallback } from 'react';
import { produce } from 'immer';
import JoinForm from '../../components/member/JoinForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apiJoin } from '../../api/member';

const JoinContainer = () => {
  const [form, setForm] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const requiredFields = {
        email: t('이메일을 입력하세요'),
        name: t('이름을 입력하세요.'),
        id: t('아이디를 입력하세요'),
        password: t('비밀번호를 입력하세요'),
        confirmPassword: t('비밀번호 확인을 입력하세요.'),
      };

      const _errors = {};
      let hasErrors = false;

      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        if (!form[key] || !form[key].trim()) {
          _errors[key].push(value);
          hasErrors = true;
        }
      }

      setErrors(_errors);

      if (hasErrors) {
        return;
      }

      if (!hasErrors) {
        apiJoin(form)
          .then((res) => {
            if (res !== 'success') {
              alert(
                `오류정보 : ${res} 회원가입에 실패했습니다 다시 시도해주세요`,
              );
            } else {
              alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
              navigate('/sign-in');
            }
          })
          .catch((err) => {
            if (err.message) {
              err.messages = err.messages || {};
              err.messages.global = err.messages.global || [];
              err.messages.global.push(err.message);
            }

            if (err.messages) {
              for (const [key, values] of Object.entries(err.messages)) {
                if (values && values.length > 0) {
                  _errors[key] = values;
                }
              }

              setErrors({ ..._errors });
            }
          });
      }
    },
    [t, form, navigate],
  );

  return (
    <>
      <JoinForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};

export default React.memo(JoinContainer);

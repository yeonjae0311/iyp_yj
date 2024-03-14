import LoginForm from '../../components/member/LoginForm';
import React, { useCallback, useContext, useState } from 'react';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../modules/UserContext';
import { apiLogin } from '../../api/member';

const LoginContainer = () => {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

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

      /* 필수 입력 항목 S */
      const requiredFields = {
        id: t('아이디를 입력하세요.'),
        password: t('비밀번호를 입력하세요.'),
      };
      /* 필수 입력 항목 E */

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

      const {
        actions: { setIsLogin, setUserInfo },
      } = userContext;

      apiLogin(form)
        .then((userInfo) => {
          let isLogin = false;

          if (userInfo) {
            isLogin = true;
          }

          setIsLogin(isLogin);
          setUserInfo(userInfo);

          sessionStorage.setItem('id', userInfo.id);
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

          if (isLogin === true) {
            navigate('/');
          }
        })
        .catch((err) => {
          alert('로그인 실패');
          _errors.global = _errors.global || [];
          _errors.global.push(err.messages);
          setErrors({ ..._errors });
        });
    },
    [form, t, navigate, userContext],
  );

  return (
    <>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};

export default React.memo(LoginContainer);

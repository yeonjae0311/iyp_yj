import { useCallback, useState } from 'react';
import UserEditForm from '../../components/setting/UserEditForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { produce } from 'immer';

const UserEditContainer = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
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
    },
    [t, form, navigate],
  );

  return (
    <>
      <UserEditForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};

export default UserEditContainer;

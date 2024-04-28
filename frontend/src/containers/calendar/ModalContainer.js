import { useCallback, useContext, useState } from 'react';
import CalModal from '../../components/calendar/CalModal';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';
import { apiSchedule } from '../../api/cal';
import { format } from 'date-fns';
import UserContext from '../../modules/UserContext';

const ModalContainer = ({ selectedDate, closeModal }) => {
  const { t } = useTranslation();
  const date = format(selectedDate, 'yyyy/MM/dd');
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const [form, setForm] = useState({
    stitle: '',
    sdate: date,
    scontent: '',
    scolor: '',
    u_idx: userInfo.u_idx,
  });

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value;
        }),
      ),
    [],
  );

  const handleColorPicker = (color, event) => {
    event.preventDefault();
    setForm({ ...form, scolor: color.hex });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const requiredFields = {
        stitle: t('제목을 입력하세요'),
        scontent: t('내용을 입력하세요.'),
        scolor: t('색상을 선택해주세요'),
      };

      let hasErrors = false;

      for (const [key, value] of Object.entries(requiredFields)) {
        if (!form[key]) {
          alert(value);
          hasErrors = true;
        }
      }

      if (hasErrors) {
        return;
      }

      if (!hasErrors) {
        apiSchedule(form)
          .then((res) => {
            if (res == null) {
              alert('등록 실패');
            } else {
              alert('등록 성공');
              window.location.href = '/monthly';
            }
          })
          .catch((err) => {
            if (err.message) {
              err.messages = err.messages || {};
              err.messages.global = err.messages.global || [];
              err.messages.global.push(err.message);
            }
          });
      }
    },
    [t, form],
  );

  return (
    <>
      <CalModal
        selectedDate={selectedDate}
        closeModal={closeModal}
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
        handleColorPicker={handleColorPicker}
      />
    </>
  );
};

export default ModalContainer;

import { useCallback, useContext, useEffect, useState } from 'react';
import CalModal from '../../components/calendar/CalModal';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';
import { apiDeleteSchedule, apiSchedule } from '../../api/cal';
import { format } from 'date-fns';
import UserContext from '../../modules/UserContext';
import CalUpdateModal from '../../components/calendar/CalUpdateModal';

const ModalUpdateContainer = ({
  selectedDate,
  closeUpdateModal,
  toDoUp,
  scheId,
}) => {
  const { t } = useTranslation();
  const date = format(selectedDate, 'yyyy/MM/dd');
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const [form, setForm] = useState({
    sidx: scheId,
    stitle: '',
    sdate: '',
    scontent: '',
    scolor: '',
  });

  useEffect(() => {
    setForm({
      sidx: scheId,
      stitle: toDoUp.stitle,
      sdate: toDoUp.sdate,
      scontent: toDoUp.scontent,
      scolor: toDoUp.scolor,
    });
  }, [toDoUp]);

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

  const deleteClick = () => {
    const data = { sidx: scheId };
    apiDeleteSchedule(data)
      .then(() => {
        alert('일정이 삭제되었습니다.');
        window.location.href = '/monthly';
      })
      .catch((err) => {
        console.log('schedule delete error');
        console.log(err);
      });
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
              alert('수정 실패');
            } else {
              alert('수정 성공');
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
      <CalUpdateModal
        toDoUp={toDoUp}
        selectedDate={selectedDate}
        closeUpdateModal={closeUpdateModal}
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
        handleColorPicker={handleColorPicker}
        deleteClick={deleteClick}
      />
    </>
  );
};

export default ModalUpdateContainer;

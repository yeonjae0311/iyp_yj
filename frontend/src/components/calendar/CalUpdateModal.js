import styled from 'styled-components';
import { FormBox } from '../commons/BoxStyle';
import { MiniTitle } from '../commons/TitleStyle';
import { TextArea, TitleInput } from '../commons/InputStyle';

import { RxCross2 } from 'react-icons/rx';
import { CirclePicker } from 'react-color';
import { FiLink } from 'react-icons/fi';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const FormBoxModal = styled(FormBox)`
  margin: auto;
  background-color: white;
  justify-content: normal;
  align-items: normal;

  .btnBar {
    display: flex;
    width: 110px;
    align-items: baseline;
    width: 150px;

    .editBtn {
      display: flex;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .editBtn:hover {
      cursor: pointer;
      transition: 0.2s ease-in-out;
      color: gray;
    }

    .editBtn.submitBtn {
      border: none;
      background-color: white;
    }

    .editBtn.deleteBtn {
      border: none;
      background-color: white;
    }

    .editBtn.modiBtn {
      margin-right: 6px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    align-items: baseline;

    svg {
      width: 35px;
      height: 35px;
      margin-right: 15px;
    }
  }

  svg:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .header {
    display: flex;

    .crossBtn {
      margin-right: 30px;
    }
  }
  .time {
    padding: 10px 0 0 40px;
    font-size: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 20px 40px 50px;
    .detail {
      margin-bottom: 10px;
    }
  }
`;

const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const CalUpdateModal = ({
  selectedDate,
  closeUpdateModal,
  onChange,
  form,
  onSubmit,
  handleColorPicker,
  setFormColor,
  toDoUp,
  deleteClick,
}) => {
  const { t } = useTranslation();

  const [isUpdateEdit, setIsUpdateEdit] = useState(false);

  const editToggle = (e) => {
    setIsUpdateEdit(!isUpdateEdit);
  };

  return (
    <div>
      <ModalBackdrop>
        <FormBoxModal width="537px" height="650px" onSubmit={onSubmit}>
          <div className="header">
            <TitleInput
              margin_bottom={'0'}
              placeholder={t(`제목 입력`)}
              onChange={onChange}
              name="stitle"
              readOnly={!isUpdateEdit}
              value={form.stitle}
              $edit={isUpdateEdit}
            />
            <RxCross2
              className="crossBtn"
              size="35"
              onClick={closeUpdateModal}
            />
          </div>
          <div className="time">
            {toDoUp.sdate}
            <input type="hidden" value={form.sdate} name="sdate" />
            <input
              type="hidden"
              value={localStorage.getItem('email')}
              name="email"
            />
          </div>
          <div className="content">
            <div>
              <MiniTitle>{t(`상세내용`)}</MiniTitle>{' '}
              <TextArea
                name="scontent"
                placeholder={t(`ex) 3시 서울00치과에서 교정 예약 되어있음`)}
                readOnly={!isUpdateEdit}
                onChange={onChange}
                value={form.scontent}
                $edit={isUpdateEdit}
              />
            </div>
            <div className="deco">
              <MiniTitle>{t(`색상`)}</MiniTitle>
              <CirclePicker
                circleSize={25}
                name="scolor"
                value={form.scolor}
                onChange={handleColorPicker}
              />
            </div>
            <div className="footer">
              <div>
                <FiLink />
                <FaRegShareFromSquare />
              </div>
              <div className="btnBar">
                <div className="editBtn modiBtn" onClick={editToggle}>
                  {t(`편집`)}
                </div>
                <button className="editBtn submitBtn" type="submit">
                  {t(`등록`)}
                </button>
                <div className="editBtn deleteBtn" onClick={deleteClick}>
                  {t(`삭제`)}
                </div>
              </div>
            </div>
          </div>
        </FormBoxModal>
      </ModalBackdrop>
    </div>
  );
};

export default CalUpdateModal;

import styled from 'styled-components';
import { FormBox } from '../commons/BoxStyle';
import { MiniTitle } from '../commons/TitleStyle';
import { TextArea, TitleInput } from '../commons/InputStyle';

import { RxCross2 } from 'react-icons/rx';
import { format } from 'date-fns';
import { CirclePicker } from 'react-color';
import { FiLink } from 'react-icons/fi';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormBoxModal = styled(FormBox)`
  margin: auto;
  background-color: white;
  justify-content: normal;
  align-items: normal;

  .btnBar {
    display: flex;
    width: 110px;

    .editBtn {
      display: flex;
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 10px;
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
    padding: 20px 40px 40px;
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

const CalModal = ({
  selectedDate,
  closeModal,
  onChange,
  form,
  onSubmit,
  handleColorPicker,
  setFormColor,
}) => {
  const { t } = useTranslation();

  const [isEdit, setIsEdit] = useState(false);

  const date = format(selectedDate, 'yyyy/MM/dd');

  const editToggle = (e) => {
    setIsEdit(!isEdit);
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
              readOnly={!isEdit}
              value={form.stitle}
              $edit={isEdit}
            />
            <RxCross2 className="crossBtn" size="35" onClick={closeModal} />
          </div>
          <div className="time">
            {date}
            <input type="hidden" value={date} name="sdate" />
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
                readOnly={!isEdit}
                onChange={onChange}
                value={form.scontent}
                $edit={isEdit}
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
                <div className="editBtn" onClick={editToggle}>
                  {t(`수정`)}
                </div>
                <button className="editBtn submitBtn" type="submit">
                  {t(`등록`)}
                </button>
              </div>
            </div>
          </div>
        </FormBoxModal>
      </ModalBackdrop>
    </div>
  );
};

export default CalModal;

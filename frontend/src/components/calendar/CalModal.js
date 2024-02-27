import styled from 'styled-components';
import { FormBox } from '../commons/BoxStyle';
import { MiniTitle, SubTitle } from '../commons/TitleStyle';
import { RxCross2 } from 'react-icons/rx';
import { format } from 'date-fns';
import { CirclePicker } from 'react-color';
import { FiLink } from 'react-icons/fi';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const CalModal = ({ selectedDate, closeModal }) => {
  const { t } = useTranslation();

  const date = format(selectedDate, 'yyyy/MM/dd');

  const FormBoxModal = styled(FormBox)`
    margin: auto;
    background-color: white;
    justify-content: normal;
    align-items: normal;

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
      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    :hover svg {
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
    .text {
      display: flex;
      margin-top: 10px;
      margin-bottom: 20px;
      justify-content: space-between;
      width: 430px;
    }

    .header {
      display: flex;

      h2 {
        font-size: 2.5rem;
        padding: 40px 40px 5px;
      }
      .crossBtn {
        width: 33px;
        height: 33px;
        margin-right: 40px;
      }
    }
    .time {
      padding: 0 0 0 40px;
      font-size: 20px;
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 20px 40px;
      .detail {
        margin-bottom: 120px;
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

  return (
    <div>
      <ModalBackdrop>
        <FormBoxModal width="537px" height="650px">
          <div className="header">
            <SubTitle margin_bottom={'0'}>Title</SubTitle>
            <RxCross2 className="crossBtn" onClick={closeModal} />
          </div>
          <div className="time">{date}</div>
          <div className="content">
            <div className="detail">
              <MiniTitle>{t(`상세내용`)}</MiniTitle>
              <span>교정치료를 위해 치과 방문</span>
            </div>
            <div className="deco">
              <MiniTitle>{t(`색상`)}</MiniTitle>
              <CirclePicker circleSize={25} />
            </div>
            <div className="footer">
              <div>
                <FiLink />
                <FaRegShareFromSquare />
              </div>
              <span>{t(`수정하기`)}</span>
            </div>
          </div>
        </FormBoxModal>
      </ModalBackdrop>
    </div>
  );
};

export default CalModal;

import CalModal from '../../components/calendar/CalModal';

const ModalContainer = ({ selectedDate, closeModal }) => {
  return (
    <>
      <CalModal selectedDate={selectedDate} closeModal={closeModal} />
    </>
  );
};

export default ModalContainer;

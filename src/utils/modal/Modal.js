import "./modal.scss";

const Modal = ({ openModal, setOpenModal }) => {
  return (
    openModal && (
      <>
        <div className="modal">
          <span
            onClick={() => setOpenModal((openModal) => !openModal)}
            className="modal_cross_span"
          >
            X
          </span>
          <span>
            We don't support this language as of now, we are working on it...
          </span>
        </div>
      </>
    )
  );
};

export default Modal;

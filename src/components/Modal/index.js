import "./modal.css";

const Modal = (props) => {
  const { handleClose, show, card } = props;
  const classModal = show
    ? "modal-container display-block"
    : "modal-container display-none";

  const { title, description, genres } = card[0];

  return (
    <div className={classModal}>
      <div className="modal-details-containers">
        <h1 className="modal-initial">{title[0]}</h1>
        <h1 className="modal-title">{title}</h1>
        <p className="modal-heading">
          Description: <span className="modal-value">{description}</span>
        </p>
        <p className="modal-heading">
          Genre: <span className="modal-value">{genres}</span>
        </p>
        <button type="button" onClick={handleClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

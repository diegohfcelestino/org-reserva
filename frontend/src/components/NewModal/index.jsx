import Modal from "react-modal";
import "./style.scss";

Modal.setAppElement("#root");

const NewModal = ({ isOpen, onRequestClose, url }) => {
  return (
    <div className="container">
      <div className="row">
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
        >
          <div className="container">
            <iframe
              width="100%"
              height="450"
              src={url} //"https://www.youtube.com/embed/MJuzskXrehM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container">
            <button
              className="btn btn-lg btn-danger mt-4"
              type="button"
              onClick={onRequestClose}
            >
              Fechar [x]
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewModal;

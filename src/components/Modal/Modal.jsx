import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css"

const Modal = ({ modalImg, tags, onCloseModal }) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        return onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      return onCloseModal();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div>
        <img className={styles.Modal} src={modalImg} alt={tags} />
      </div>
    </div>
  )
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Modal;
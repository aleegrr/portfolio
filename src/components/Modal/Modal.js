import { useEffect, memo } from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  const {
    openModal = false,
    fnCloseModal,
    styleContent = '',
    styleOverlay = '',
    children,
  } = props;

  useEffect(() => {
    if (openModal) {
      document.body.classList.add('hideScroll');
    } else {
      document.body.classList.remove('hideScroll');
    }

    return () => {
      document.body.classList.remove('hideScroll'); // Limpieza al desmontar
    };
  }, [openModal]);

  const closeModalHandler = () => {
    fnCloseModal();
  };

  if (!openModal) return null;

  return (
    <div className={styles.modal}>
      <div
        onClick={closeModalHandler}
        className={`${styles.overlay} ${styleOverlay}`}
        role="none"
      />
      <div className={`${styles.modalContent} ${styleContent}`}>
        {children}
        <div className={styles.btnWrapper}>
          <button
            className={styles.closeBtn}
            onClick={closeModalHandler}
            type="button"
            aria-label="Cerrar modal"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Modal);

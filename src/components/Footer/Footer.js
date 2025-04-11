import { useState, lazy, Suspense } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.png';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className="img">
            <img
              src={logo1}
              className={styles.logoImg}
              width="300px"
              height="300px"
              alt=""
            />
          </div>
          <p>
            {' '}
            💻 - Construido por{' '}
            <button
              type="button"
              onClick={() => setModal(true)}
              className={styles.userBtn}
            >
              @AlejandroGil{' '}
            </button>{' '}
            con 🤍 en 2024 &#x1F1EA;&#x1F1F8;
          </p>
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />

          <button
            title="Regresar arriba"
            name="Regresar arriba"
            type="button"
            className={styles.floatBtn}
            onClick={scrollTop}
          >
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
        <br />
      </footer>
    </>
  );
};

export default Footer;

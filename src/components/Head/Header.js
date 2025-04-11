import { useState, lazy, Suspense, useEffect } from 'react';

import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';

import logo1 from '../../assets/logo_fondo_blanco_4.png';
import styles from './Header.module.css';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const ModalConfig = lazy(() => import('./ModalConfig'));
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Header = () => {
  const [modal, setModal] = useState(false);

  const { open, handleOpen, handleClose } = useToggle();
  const [Mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    function handleScroll() {
      setMobile(false);
      setActiveNav(window.scrollY > 100);
    }
    window.addEventListener('scroll', handleScroll);

    function handlePWAInit(event) {
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    }

    window.addEventListener('beforeinstallprompt', handlePWAInit);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handlePWAInit);
    };
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('hideScroll');
    } else {
      document.body.classList.remove('hideScroll');
    }

    return () => {
      document.body.classList.remove('hideScroll'); // Limpieza al desmontar
    };
  }, [modal]);

  const toogleMobileNav = () => {
    setMobile(!Mobile);
  };
  const removeMobileNav = () => {
    setMobile(false);
  };

  const handleLink = (section) => {
    removeMobileNav();
    setMobile(false);
    scrollTo(section);
  };

  async function downloadApp() {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.log('oops, no prompt event guardado en window');
      return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
          <AboutMe />
        </Modal>
        <Modal
          openModal={open}
          fnCloseModal={() => handleClose()}
          styleOverlay={styles.modalContentConfigOverlay}
        >
          <ModalConfig />
        </Modal>
      </Suspense>
      <header className={activeNav ? styles.headerActive : styles.header}>
        <nav className={styles.nav}>
          <button type="button" onClick={scrollTop}>
            <img
              width="200px"
              height="50px"
              src={logo1}
              alt="<AntonioAyola/>"
              className={styles.logo}
            />
          </button>
          <ul className={styles.navLinks}>
            <li className="home">
              <a title="inicio" href="#!" onClick={() => handleLink('home')}>
                inicio
              </a>
            </li>
            <li className="portfolio">
              <a
                title="portfolio"
                href="#!"
                onClick={() => handleLink('portfolio')}
              >
                portfolio
              </a>
            </li>
            <li className="features">
              <a
                title="habilidades"
                href="#!"
                onClick={() => handleLink('features')}
              >
                habilidades
              </a>
            </li>
            <li className="contact">
              <a
                title="contacto"
                href="#!"
                onClick={() => handleLink('contact')}
              >
                contacto
              </a>
            </li>
            <li className="about">
              <a title="SOBRE MI" href="#!" onClick={() => setModal(true)}>
                SOBRE MI
              </a>
            </li>
            <li>
              <a title="config" href="#!" onClick={() => handleOpen()}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>
          </ul>
          {true && (
            <ul
              className={`${styles.navMobileLinks} ${
                Mobile ? styles.navMobileLinksWidth : ''
              }`}
            >
              <li className="home">
                <a title="inicio" href="#!" onClick={() => handleLink('home')}>
                  inicio
                </a>
              </li>
              <li className="portfolio">
                <a
                  title="portfolio"
                  href="#!"
                  onClick={() => handleLink('portfolio')}
                >
                  portfolio
                </a>
              </li>
              <li className="features">
                <a
                  title="habilidades"
                  href="#!"
                  onClick={() => handleLink('features')}
                >
                  habilidades
                </a>
              </li>
              <li className="contact">
                <a
                  title="contacto"
                  href="#!"
                  onClick={() => handleLink('contact')}
                >
                  contacto
                </a>
              </li>
              <li className="about">
                <a
                  title="sobre mi"
                  href="#!"
                  onClick={() => {
                    setMobile(false);
                    setModal(true);
                  }}
                >
                  sobre mi
                </a>
              </li>
              <li>
                <a title="config" href="#!" onClick={() => handleOpen()}>
                  <i className={styles.cogBtn} title="Theme Config" />
                </a>
              </li>

              {isReadyForInstall ? (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => downloadApp(true)}
                  >
                    Instalar APP
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => {
                      setMobile(false);
                      setModal(true);
                    }}
                  >
                    VER MAS
                  </button>
                </li>
              )}
            </ul>
          )}

          <button
            className={Mobile ? styles.closeBtn : styles.openBtn}
            onClick={toogleMobileNav}
            type="button"
            title="Abrir Menu Lateral"
            name="Abrir Menu Lateral"
          >
            <i
              className={
                Mobile ? styles['btn-close-icon'] : styles['btn-open-icon']
              }
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

import { useState, lazy, Suspense, useRef } from 'react';

import PortfolioData from './PortfolioData';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import styles from './Portfolio.module.css';

import Card from './Card';
import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AllPortfolioProjects = lazy(() => import('../AllPortfolioProjects'));

const Portfolio = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AllPortfolioProjects />
        </Suspense>
      </Modal>
      <section className={styles.folio} id="portfolio" ref={sectionRef}>
        <div className="container">
          <div
            className={`${styles.heading} ${
              isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
            }`}
          >
            <h4>VISITA LOS PROYECTOS MAS RECIENTES DE MI PORTFOLIO</h4>
            <h1>Mi Portfolio</h1>
          </div>
          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => setModal(true)}
            aria-label="ver todos los proyectos"
          >
            VER TODOS LOS PROYECTOS
          </button>
          {console.log(PortfolioData)}
          <div className={styles.contentGrid}>
            <Card project={PortfolioData[0]} />
            <Card project={PortfolioData[1]} />
            <Card project={PortfolioData[2]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

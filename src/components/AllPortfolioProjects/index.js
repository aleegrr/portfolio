import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';
import Card from './Card';

import PortfolioData from '../Portfolio/PortfolioData';

const categories = ['TODOS', 'WEB DESIGN', 'FULLSTACK', 'IA'];

function Index() {
  const [activeSection, setActiveSection] = useState(0);
  const [projectsList, setProjectsList] = useState(PortfolioData);

  function filterProjects(category) {
    if (category !== 'TODOS') {
      const list = PortfolioData.filter(
        (project) => project.category === category,
      );

      setProjectsList(list);
    } else {
      console.log('todos');
      setProjectsList(PortfolioData);
    }
  }

  return (
    <section className={styles.allPortfolio}>
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA LOS PROYECTOS DE MI PORTFOLIO</h4>
          <h1>Portfolio</h1>
        </div>
        <div className={styles.tagsContainer}>
          <p>Filtrar Categorias-&gt;</p>
          <ul className={styles.tabs}>
            {categories.map((category, index) => (
              <li
                key={index}
                className={activeSection === index ? styles.active : null}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection(index);
                    filterProjects(category);
                  }}
                  className={styles.tabBtn}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <TransitionGroup className={styles.contentGrid}>
          {projectsList.map((project) => (
            <CSSTransition
              key={project.id}
              timeout={500}
              classNames="transition"
            >
              <Card key={project.id} project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
}

export default Index;

import styles from './Features.module.css';

const Card = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.mainIcon}>
        <i className={icon} />
      </span>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

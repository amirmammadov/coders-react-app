import styles from "./card.module.scss";

const Card = (props: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.profileImg}>
        <img src={props.img} alt="img" className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{props.text}</div>
        <div className={styles.btn}>View Profile</div>
      </div>
    </div>
  );
};

export default Card;

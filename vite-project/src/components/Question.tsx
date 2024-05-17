import { useState } from "react";

import styles from "./questions.module.scss";

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={styles.question}>
      <div className={styles.header}>
        <div className={styles.title}>{question}</div>
        <button className={styles.btn} onClick={handleOpen}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className={`${styles.desc} ${open ? styles.active : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default Question;

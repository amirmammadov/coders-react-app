import styles from "./App.module.scss";

import { questions } from "./data/questions";

import Question from "./components/Question";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Questions</div>
      <div className={styles.content}>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default App;

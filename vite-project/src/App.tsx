import Card from "./components/Card/Card";

import styles from "./App.module.scss";

import { persons } from "./data/persons";

const App = () => {
  return (
    <div className={styles.container}>
      {persons.map((person) => {
        return (
          <Card key={person.id} img={person.imgUrl} text={person.personName} />
        );
      })}
    </div>
  );
};

export default App;

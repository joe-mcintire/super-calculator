import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Calculators from "./pages/Calculators/Calculators";

function App() {
  return (
    <div className={styles.app}>
      <Calculators />
    </div>
  );
}

export default App;

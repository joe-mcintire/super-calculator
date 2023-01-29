import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import { CalculatorType } from "../../constants/enums";
import styles from "./Calculators.module.css";

const Calculators = () => {
  const calculators = [CalculatorType.KmToMile, CalculatorType.MileToKm];

  return (
    <div>
      <div className={styles.cards}>
        {calculators.map((c) => (
          <Calculator calculatorType={c} />
        ))}
      </div>
    </div>
  );
};

export default Calculators;

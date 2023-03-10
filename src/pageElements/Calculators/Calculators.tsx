import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import { useCalculatorGlobalState } from "../../globalState/CalculatorGlobalState";
import styles from "./Calculators.module.css";

const Calculators = () => {
  const { calculators } = useCalculatorGlobalState();

  return (
    <div>
      {calculators?.length ? (
        <div className={styles.cards}>
          {calculators?.map((c) => (
            <div key={`calculator-${c.id}`}>
              <Calculator
                calculatorType={c.calculatorType}
                calculatorId={c.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          Super Calculator
        </div>
      )}
    </div>
  );
};

export default Calculators;

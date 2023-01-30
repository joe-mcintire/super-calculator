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
          {calculators?.map((c, i) => (
            <div>
              <Calculator calculatorType={c} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          Add some calculators below to get started!
        </div>
      )}
    </div>
  );
};

export default Calculators;

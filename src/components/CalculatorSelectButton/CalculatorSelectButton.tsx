import React from "react";
import {
  CalculatorType,
  CALCULATOR_DEFINITIONS,
} from "../../calculatorDefinitions/definitionsMap";
import Button from "../Button/Button";
import styles from "./CalculatorSelectButton.module.css";

type Props = {
  calculatorType?: CalculatorType;
  onClick?: () => void;
};

const CalculatorSelectButton = ({ calculatorType, onClick }: Props) => {
  const calculatorDefinition =
    calculatorType !== undefined
      ? CALCULATOR_DEFINITIONS[calculatorType]
      : undefined;

  return (
    <Button
      className={styles.wrapperButton}
      onClick={onClick}
      style={{
        backgroundColor: calculatorDefinition?.secondaryColor,
        borderColor: calculatorDefinition?.secondaryColor,
      }}
    >
      <div className={styles.ring} style={{
        backgroundColor: calculatorDefinition?.primaryColor,
        borderColor: calculatorDefinition?.primaryColor,
      }}><div className={styles.content}>{calculatorDefinition?.label}</div></div>
    </Button>
  );
};

export default CalculatorSelectButton;

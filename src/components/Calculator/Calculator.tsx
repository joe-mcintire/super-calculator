import classNames from "classnames";
import React, { useState } from "react";
import {
  CalculatorType,
  CALCULATOR_DEFINITIONS,
} from "../../calculatorDefinitions/definitionsMap";
import Button from "../Button/Button";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import Card from "../Card/Card";
import Input from "../Input/Input";
import styles from "./Calculator.module.css";

export type Props = {
  calculatorType?: CalculatorType;
  data?: any;
  className?: string;
};

const Calculator = ({ calculatorType, className }: Props) => {
  const calculatorDefinition =
    calculatorType !== undefined
      ? CALCULATOR_DEFINITIONS[calculatorType]
      : undefined;

  const [title, setTitle] = useState(calculatorDefinition?.label);

  const CalculatorDetails = calculatorDefinition?.detailsComponent;

  if (!CalculatorDetails)
    return <div>Sorry! This calculator is not available.</div>;

  return (
    <div
      className={styles.ring}
      style={{
        borderColor: calculatorDefinition?.secondaryColor,
        backgroundColor: calculatorDefinition?.secondaryColor,
      }}
    >
      <div
        className={styles.innerRing}
        style={{
          borderColor: calculatorDefinition?.primaryColor,
          backgroundColor: calculatorDefinition?.primaryColor,
        }}
      >
        <Card className={classNames(className, styles.card)}>
          <>
            <div className={styles.header}>
              <div className={styles.title}>
                <Input
                  value={title}
                  className={styles.titleInput}
                  onChange={setTitle}
                />
              </div>
              <div className={styles.controls}>
                <CalculatorButton className={styles.headerButton}>Reset</CalculatorButton>
                <CalculatorButton className={styles.headerButton}>Remove</CalculatorButton>
                <CalculatorButton className={styles.headerButton}>Lock</CalculatorButton>
              </div>
            </div>
            <div className={styles.content}>
              <CalculatorDetails />
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;

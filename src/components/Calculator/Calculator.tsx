import classNames from "classnames";
import React from "react";
import {
  CalculatorType,
  CALCULATOR_DEFINITIONS,
} from "../../calculatorDefinitions/definitionsMap";
import Card from "../Card/Card";
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
        <Card
          className={classNames(className, styles.card)}
          titleClassName={styles.title}
          title={calculatorDefinition?.label}
        >
          <div className={styles.content}>
            <CalculatorDetails />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;

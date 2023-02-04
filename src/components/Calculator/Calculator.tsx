import classNames from "classnames";
import React, { useState } from "react";
import {
  CalculatorType,
  CALCULATOR_DEFINITIONS,
} from "../../calculatorDefinitions/definitionsMap";
import { useCalculatorGlobalState } from "../../globalState/CalculatorGlobalState";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import Card from "../Card/Card";
import Input from "../Input/Input";
import styles from "./Calculator.module.css";

export type Props = {
  calculatorType?: CalculatorType;
  data?: any;
  className?: string;
  calculatorId?: string;
};

const Calculator = ({ calculatorType, className, calculatorId }: Props) => {
  const { removeCalculator } = useCalculatorGlobalState();
  const [resetCount, setResetCount] = useState(0);
  const [locked, setLocked] = useState(false);

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
      className={classNames(
        styles.ring,
        { [styles.locked]: locked },
        { [styles.unlocked]: !locked }
      )}
      style={{
        borderColor: calculatorDefinition?.secondaryColor,
        backgroundColor: calculatorDefinition?.secondaryColor,
        boxShadow: `0 0 8px 2px ${calculatorDefinition?.secondaryColor}`,
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
                  viewOnly={locked}
                />
              </div>
              <div className={styles.controls}>
                {!locked && (
                  <CalculatorButton
                    className={styles.headerButton}
                    onClick={() => setResetCount((original) => original + 1)}
                  >
                    Reset
                  </CalculatorButton>
                )}
                {!locked && (
                  <CalculatorButton
                    className={styles.headerButton}
                    onClick={() => {
                      if (calculatorId !== undefined)
                        removeCalculator(calculatorId);
                    }}
                  >
                    Remove
                  </CalculatorButton>
                )}
                <CalculatorButton
                  className={styles.headerButton}
                  onClick={() => setLocked((original) => !original)}
                >
                  {!locked ? "Lock" : "Unlock"}
                </CalculatorButton>
              </div>
            </div>
            <div className={styles.content}>
              <CalculatorDetails
                key={`calculator-details-${resetCount}`}
                locked={locked}
              />
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;

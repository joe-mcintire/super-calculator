import classNames from "classnames";
import React from "react";
import {
  CalculatorType,
  CALCULATOR_DEFINITIONS,
} from "../../calculatorDefinitions/definitionsMap";
import Button from "../../components/Button/Button";
import CalculatorSelectButton from "../../components/CalculatorSelectButton/CalculatorSelectButton";
import styles from "./AddCalculatorMenu.module.css";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onCalculatorSelect?: (calculatorType?: CalculatorType) => void;
};

const AddCalculatorMenu = ({
  open,
  onOpenChange,
  onCalculatorSelect,
}: Props) => {
  return (
    <div className={classNames(styles.wrapper, { [styles.open]: open })}>
      <div className={styles.control}>
        <Button
          onClick={() => onOpenChange?.(!open)}
          className={styles.controlButton}
        >
          {open ? "All Set" : "+ Add Calculator"}
        </Button>
      </div>
      <div className={styles.content}>
        {Object.keys(CALCULATOR_DEFINITIONS).map((c) => (
          <CalculatorSelectButton
            calculatorType={Number(c)}
            onClick={() => onCalculatorSelect?.(Number(c))}
            key={`calculator-select-button-${c}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AddCalculatorMenu;

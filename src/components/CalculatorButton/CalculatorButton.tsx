import classNames from "classnames";
import React, { ReactElement } from "react";
import Button, { Props as ButtonProps } from "../Button/Button";
import styles from "./CalculatorButton.module.css";

type Props = ButtonProps;

const CalculatorButton = ({ children, className, ...otherProps }: Props) => {
  return (
    <Button {...otherProps} className={classNames(className, styles.button)}>
      {children}
    </Button>
  );
};

export default CalculatorButton;

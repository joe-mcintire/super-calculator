import classNames from "classnames";
import React from "react";
import Input, { Props as InputProps } from "../Input/Input";
import styles from './CalculatorInput.module.css'

type Props = InputProps;

const CalculatorInput = ({ className, ...otherProps }: Props) => {
  return <Input {...otherProps} className={classNames(className, styles.input)} />;
};

export default CalculatorInput;

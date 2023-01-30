import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

export type Props = {
  value?: string;
  onChange?: (newValue: string) => void;
  className?: string;
};

const Input = ({ value, onChange, className }: Props) => {
  return (
    <input
      className={classNames(styles.input, className)}
      value={value}
      onInput={(event) => onChange?.(event.currentTarget.value)}
    />
  );
};

export default Input;

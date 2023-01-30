import classNames from "classnames";
import React, { CSSProperties, ReactElement } from "react";
import styles from "./Button.module.css";

type Props = {
  onClick?: () => void;
  children?: ReactElement | string;
  className?: string;
  style?: CSSProperties;
};

const Button = ({ children, onClick, className, style }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(className, styles.main)}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

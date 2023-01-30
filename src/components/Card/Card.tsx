import classNames from "classnames";
import React, { CSSProperties, ReactElement } from "react";
import styles from "./Card.module.css";

type Props = {
  children?: ReactElement;
  className?: string;
  titleClassName?: string;
  title?: string;
  style?: CSSProperties;
};

const Card = ({ children, className, title, titleClassName, style }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      {title && (
        <div className={classNames(styles.title, titleClassName)}>{title}</div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;

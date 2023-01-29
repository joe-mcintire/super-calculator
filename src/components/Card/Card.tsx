import classNames from "classnames";
import React, { ReactElement } from "react";
import styles from "./Card.module.css";

type Props = {
  children?: ReactElement;
  className?: string;
  title?: string;
};

const Card = ({ children, className, title }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {title && <div className={styles.title}>{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;

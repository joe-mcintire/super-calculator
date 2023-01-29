import React, { ReactElement } from "react";
import styles from "./Card.module.css";

type Props = {
  children?: ReactElement;
};

const Card = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Card;

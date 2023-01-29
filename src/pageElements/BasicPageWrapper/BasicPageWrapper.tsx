import React from "react";
import { Outlet, useMatch, useMatches } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import styles from "./BasicPageWrapper.module.css";

const BasicPageWrapper = () => {
  const pageTitle = usePageTitle();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BasicPageWrapper;

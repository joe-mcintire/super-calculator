import React from "react";
import { Outlet, useMatch, useMatches } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import AddCalculatorMenu from "../AddCalculatorMenu.tsx/AddCalculatorMenu";
import styles from "./CalculatorPageWrapper.module.css";

const CalculatorPageWrapper = () => {
  const pageTitle = usePageTitle();

  return (
    <div className={styles.wrapper}>
      <div>
        <Outlet />
      </div>
      <AddCalculatorMenu />
    </div>
  );
};

export default CalculatorPageWrapper;

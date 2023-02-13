import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useCalculatorGlobalState } from "../../globalState/CalculatorGlobalState";
import AddCalculatorMenu from "../AddCalculatorMenu.tsx/AddCalculatorMenu";
import styles from "./CalculatorPageWrapper.module.css";

const CalculatorPageWrapper = () => {
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const { addCalculator } = useCalculatorGlobalState();

  return (
    <div className={styles.wrapper}>
      <div>
        <Outlet />
      </div>
      <AddCalculatorMenu
        open={addMenuOpen}
        onOpenChange={setAddMenuOpen}
        onCalculatorSelect={addCalculator}
      />
    </div>
  );
};

export default CalculatorPageWrapper;

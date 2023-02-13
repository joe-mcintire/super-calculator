import React from "react";
import styles from "./App.module.css";
import Calculators from "./pageElements/Calculators/Calculators";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicPageWrapper from "./pageElements/BasicPageWrapper/BasicPageWrapper";
import CalculatorPageWrapper from "./pageElements/CalculatorPageWrapper/CalculatorPageWrapper";
import { CalculatorGlobalStateProvider } from "./globalState/CalculatorGlobalState";
import './global.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CalculatorPageWrapper />,
      handle: { title: "Calculators" },
      children: [{ index: true, element: <Calculators /> }],
    },
    {
      path: "/*",
      element: <BasicPageWrapper />,
      children: [
        {
          path: "about",
          element: <div>about</div>,
          handle: { title: "About" },
        },
      ],
    },
  ]);

  return (
    <div className={styles.app}>
      <CalculatorGlobalStateProvider>
        <RouterProvider router={router} />
      </CalculatorGlobalStateProvider>
    </div>
  );
}

export default App;

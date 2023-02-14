import React from "react";
import styles from "./App.module.css";
import Calculators from "./pageElements/Calculators/Calculators";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicPageWrapper from "./pageElements/BasicPageWrapper/BasicPageWrapper";
import CalculatorPageWrapper from "./pageElements/CalculatorPageWrapper/CalculatorPageWrapper";
import { CalculatorGlobalStateProvider } from "./globalState/CalculatorGlobalState";
import "./global.css";
import { renderToStaticMarkup } from "react-dom/server";

function App() {
  const router = createBrowserRouter(
    [
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
    ],
    { basename: process.env.PUBLIC_URL }
  );

  return (
    <div
      className={styles.app}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          renderToStaticMarkup(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <defs>
                <radialGradient id="RadialGradient1">
                  <stop offset="0%" stop-color="black" stop-opacity="0" />
                  <stop offset="20%" stop-color="black" stop-opacity="1" />
                  <stop offset="80%" stop-color="black" stop-opacity="0" />
                  <stop offset="100%" stop-color="black" stop-opacity="1" />
                </radialGradient>
                <pattern
                  id="Pattern2"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <rect fill="url(#RadialGradient1)" width="10" height="10" />
                </pattern>
                <pattern
                  id="Pattern"
                  width="300"
                  height="300"
                  patternUnits="userSpaceOnUse"
                >
                  <filter id="filter">
                    <feTurbulence baseFrequency="0.5" />
                    <feColorMatrix
                      values="0 0 0 9 -4
                               0 0 0 9 -4
                               0 0 0 9 -4
                               0 0 0 0 1"
                    />
                  </filter>
                  <rect width="300" height="300" filter="url(#filter)" />
                  <rect fill="url(#Pattern2)" width="300" height="300" />
                </pattern>
              </defs>
              <rect fill="url(#Pattern)" width="500" height="500" />
            </svg>
          )
        )}")`,
        backgroundRepeat: "repeat",
      }}
    >
      <CalculatorGlobalStateProvider>
        <RouterProvider router={router} />
      </CalculatorGlobalStateProvider>
    </div>
  );
}

export default App;

import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { CalculatorType } from "../calculatorDefinitions/definitionsMap";
import {v4 as uuid} from "uuid";

type CalculatorInstance = {
  calculatorType: CalculatorType;
  id: string;
};

type CalculatorGlobalState = {
  calculators?: CalculatorInstance[];
  setCalculators: (newValue?: CalculatorInstance[]) => void;
};

type UseCalculatorGlobalStateResult = Omit<
  CalculatorGlobalState,
  "setCalculators"
> & {
  addCalculator: (calculatorType?: CalculatorType) => void;
  removeCalculator: (calculatorId: string) => void;
};

const DEFAULT_STATE: CalculatorGlobalState = {
  calculators: [],
  setCalculators: () => null,
};

export const CalculatorGlobalStateContext =
  createContext<CalculatorGlobalState>(DEFAULT_STATE);

export const CalculatorGlobalStateProvider = ({
  children,
}: {
  children?: ReactElement;
}) => {
  const [stateData, setStateData] =
    useState<CalculatorGlobalState>(DEFAULT_STATE);

  return (
    <CalculatorGlobalStateContext.Provider
      value={{
        ...stateData,
        setCalculators: (newValue) =>
          setStateData((original) => ({ ...original, calculators: newValue })),
      }}
    >
      {children}
    </CalculatorGlobalStateContext.Provider>
  );
};

export const useCalculatorGlobalState = (): UseCalculatorGlobalStateResult => {
  const context = useContext(CalculatorGlobalStateContext);

  const addCalculator = (calculatorType?: CalculatorType) => {
    if (calculatorType !== undefined)
      context.setCalculators([
        ...(context.calculators ?? []),
        { calculatorType, id: uuid() },
      ]);
  };

  const removeCalculator = (calculatorId: string) => {
    context.setCalculators(
      context.calculators?.filter(c => c.id !== calculatorId)
    );
  };

  return { calculators: context.calculators, addCalculator, removeCalculator };
};

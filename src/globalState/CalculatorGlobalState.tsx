import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { CalculatorType } from "../calculatorDefinitions/definitionsMap";

type CalculatorGlobalState = {
  calculators?: CalculatorType[];
  setCalculators: (newValue?: CalculatorType[]) => void;
};

type UseCalculatorGlobalStateResult = Omit<
  CalculatorGlobalState,
  "setCalculators"
> & {
  addCalculator: (calculatorType?: CalculatorType) => void;
  removeCalculator: (calculatorIndex: number) => void;
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
      context.setCalculators([...(context.calculators ?? []), calculatorType]);
  };

  const removeCalculator = (calculatorIndex: number) => {
    context.setCalculators(
      context.calculators?.filter((c, i) => i !== calculatorIndex)
    );
  };

  return { calculators: context.calculators, addCalculator, removeCalculator };
};

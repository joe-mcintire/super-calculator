import React from "react";
import {
  CalculatorType,
  CALCULATOR_DETAILS_COMPONENTS,
} from "../../constants/CalculatorTypes";
import { CalculatorProps } from "../../types/props";
import Card from "../Card/Card";

type Props = CalculatorProps;

const Calculator = ({ calculatorType }: Props) => {
  const CalculatorDetails =
    calculatorType !== undefined
      ? CALCULATOR_DETAILS_COMPONENTS[calculatorType]
      : undefined;

  if (!CalculatorDetails)
    return <div>Sorry! This calculator is not available.</div>;

  return (
    <Card>
      <div>
        <CalculatorDetails />
      </div>
    </Card>
  );
};

export default Calculator;

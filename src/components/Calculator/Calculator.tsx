import React from "react";
import { CALCULATOR_DEFINITIONS } from "../../calculatorDefinitions/definitionsMap";
import { CalculatorType } from "../../constants/enums";
import Card from "../Card/Card";

export type Props = {
  calculatorType?: CalculatorType;
  data?: any;
  className?: string;
};

const Calculator = ({ calculatorType, className }: Props) => {
  const calculatorDefinition =
    calculatorType !== undefined
      ? CALCULATOR_DEFINITIONS[calculatorType]
      : undefined;

  const CalculatorDetails = calculatorDefinition?.detailsComponent;

  if (!CalculatorDetails)
    return <div>Sorry! This calculator is not available.</div>;

  return (
    <Card className={className} title={calculatorDefinition?.label}>
      <div>
        <CalculatorDetails />
      </div>
    </Card>
  );
};

export default Calculator;

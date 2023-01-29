import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import { CalculatorType } from "../../constants/CalculatorTypes";

const Calculators = () => {
  const calculators = [CalculatorType.KmToMile, CalculatorType.MileToKm];

  return (
    <div>
      <h4>Calculators</h4>
      <div>
        <div>
          {calculators.map((c) => (
            <Calculator calculatorType={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculators;

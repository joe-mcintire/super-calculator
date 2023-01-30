import { useState } from "react";
import Button from "../components/Button/Button";
import { Props as CalculatorProps } from "../components/Calculator/Calculator";
import CalculatorButton from "../components/CalculatorButton/CalculatorButton";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";

const convertKmToMile = (km: string): string => {
  const numberValue = Number(km);

  if (!km || isNaN(numberValue)) return "0";

  return (numberValue * 0.6213712).toFixed(2);
};

const SumDetails = ({ data }: Omit<CalculatorProps, "calculatorType">) => {
  const [newValue, setNewValue] = useState("0");
  const [total, setTotal] = useState(0);

  return (
    <div>
      <div className="flex align-center gap-2 space-between">
        <div className="flex gap-1">
          <CalculatorInput
            value={newValue}
            onChange={(newValue) => {
              setNewValue(newValue);
            }}
            className="w-2"
          />
          <CalculatorButton
            onClick={() =>
              setTotal((original) => {
                const numberValue = Number(newValue);

                if (!newValue || isNaN(numberValue)) return original;

                return original + numberValue;
              })
            }
          >
            Add
          </CalculatorButton>
          <CalculatorButton
            onClick={() =>
              setTotal((original) => {
                const numberValue = Number(newValue);

                if (!newValue || isNaN(numberValue)) return original;

                return original - numberValue;
              })
            }
          >
            Subtract
          </CalculatorButton>
        </div>
        <div>{total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export const Sum = {
  detailsComponent: SumDetails,
  label: "Sum",
  primaryColor: "#187900",
  secondaryColor: "#26bd00",
};

export default Sum;

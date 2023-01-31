import { useState } from "react";
import CalculatorButton from "../components/CalculatorButton/CalculatorButton";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";
import { CalculatorDetailsProps } from "./definitionsMap";

const TotalDetails = ({ locked }: CalculatorDetailsProps) => {
  const [newValue, setNewValue] = useState("0");
  const [total, setTotal] = useState(0);

  return (
    <div>
      <div className="flex align-center gap-2 space-between">
        {!locked && (
          <div className="flex gap-1">
            <CalculatorInput
              value={newValue}
              onChange={(newValue) => {
                setNewValue(newValue);
              }}
              className="w-3"
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
        )}
        <div>{total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export const Total = {
  detailsComponent: TotalDetails,
  label: "Total",
  primaryColor: "#187900",
  secondaryColor: "#26bd00",
};

export default Total;

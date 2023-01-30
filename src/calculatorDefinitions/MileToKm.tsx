import { useState } from "react";
import { Props as CalculatorProps } from "../components/Calculator/Calculator";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";

const convertMileToKm = (miles: string): string => {
  const numberValue = Number(miles);

  if (!miles || isNaN(numberValue)) return "0";

  return (numberValue * 1.609344).toFixed(2);
};

const MileToKmDetails = ({ data }: Omit<CalculatorProps, "calculatorType">) => {
  const [kmValue, setKmValue] = useState("0");
  const [mileValue, setMileValue] = useState("0");

  return (
    <div>
      <div className="flex align-center gap-2">
        <div>
          <CalculatorInput
            value={mileValue}
            onChange={(newValue) => {
              setMileValue(newValue);
              setKmValue(convertMileToKm(newValue));
            }}
            className="w-3"
          />
        </div>
        <div>miles is {kmValue} kilometers</div>
      </div>
    </div>
  );
};

export const MileToKm = {
  detailsComponent: MileToKmDetails,
  label: "Miles To Kilometers",
  primaryColor: "#490079",
  secondaryColor: "#8137b3",
};

export default MileToKm;

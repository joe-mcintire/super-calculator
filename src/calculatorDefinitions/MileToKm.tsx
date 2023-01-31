import classNames from "classnames";
import { useState } from "react";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";
import { CalculatorDetailsProps } from "./definitionsMap";

const convertMileToKm = (miles: string): string => {
  const numberValue = Number(miles);

  if (!miles || isNaN(numberValue)) return "0";

  return (numberValue * 1.609344).toFixed(2);
};

const MileToKmDetails = ({ locked }: CalculatorDetailsProps) => {
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
            className={classNames({ "w-3": !locked })}
            viewOnly={locked}
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

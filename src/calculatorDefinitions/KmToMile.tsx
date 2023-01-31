import classNames from "classnames";
import { useState } from "react";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";
import { CalculatorDetailsProps } from "./definitionsMap";

const convertKmToMile = (km: string): string => {
  const numberValue = Number(km);

  if (!km || isNaN(numberValue)) return "0";

  return (numberValue * 0.6213712).toFixed(2);
};

const KmToMileDetails = ({ locked }: CalculatorDetailsProps) => {
  const [kmValue, setKmValue] = useState("0");
  const [mileValue, setMileValue] = useState("0");

  return (
    <div>
      <div className="flex align-center gap-2">
        <div>
          <CalculatorInput
            value={kmValue}
            onChange={(newValue) => {
              setKmValue(newValue);
              setMileValue(convertKmToMile(newValue));
            }}
            className={classNames({ "w-3": !locked })}
            viewOnly={locked}
          />
        </div>
        <div>KM is {mileValue} miles</div>
      </div>
    </div>
  );
};

export const KmToMile = {
  detailsComponent: KmToMileDetails,
  label: "Kilometers To Miles",
  primaryColor: "#610000",
  secondaryColor: "#a70000",
};

export default KmToMile;

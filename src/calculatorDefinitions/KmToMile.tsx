import { useState } from "react";
import { Props as CalculatorProps } from "../components/Calculator/Calculator";
import CalculatorInput from "../components/CalculatorInput/CalculatorInput";

const convertKmToMile = (km: string): string => {
  const numberValue = Number(km);

  if (!km || isNaN(numberValue)) return "0";

  return (numberValue * 0.6213712).toFixed(2);
};

const KmToMileDetails = ({ data }: Omit<CalculatorProps, "calculatorType">) => {
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
            className="w-3"
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

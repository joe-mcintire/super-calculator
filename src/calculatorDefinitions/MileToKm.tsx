import { Props as CalculatorProps } from "../components/Calculator/Calculator";

export const MileToKm = {
  detailsComponent: ({ data }: Omit<CalculatorProps, "calculatorType">) => {
    return (
      <div>
        <div>10 Miles is 12 KM</div>
      </div>
    );
  },
  label: "Miles to Kilometers",
  primaryColor: "#398383",
  secondaryColor: "#876987",
};

export default MileToKm;

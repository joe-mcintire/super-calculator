import { Props as CalculatorProps } from "../components/Calculator/Calculator";

export const KmToMile = {
  detailsComponent: ({ data }: Omit<CalculatorProps, "calculatorType">) => {
    return (
      <div>
        <div>12 KM is 10 Miles</div>
      </div>
    );
  },
  label: "Kilometers To Miles",
  primaryColor: "#398383",
  secondaryColor: "#876987",
};

export default KmToMile;

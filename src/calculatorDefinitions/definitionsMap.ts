import KmToMile from "./KmToMile";
import MileToKm from "./MileToKm";
import Total from "./Total";
import { Props as CalculatorProps } from "../components/Calculator/Calculator";
import NowToUsTimes from "./NowToUsTimes";

export enum CalculatorType {
  KmToMile,
  MileToKm,
  Total,
  NowToUsTimes
}

export type CalculatorDefinition = {
  detailsComponent?: any;
  label?: string;
  primaryColor?: string;
  secondaryColor?: string;
};

export type CalculatorDetailsProps = Omit<CalculatorProps, "calculatorType"> & {
  locked?: boolean;
};

export const CALCULATOR_DEFINITIONS: { [key: number]: CalculatorDefinition } = {
  [CalculatorType.KmToMile]: KmToMile,
  [CalculatorType.MileToKm]: MileToKm,
  [CalculatorType.Total]: Total,
  [CalculatorType.NowToUsTimes]: NowToUsTimes
};

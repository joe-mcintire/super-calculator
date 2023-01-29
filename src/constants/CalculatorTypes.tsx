import KmToMile from "../components/CalculatorDetails/KmToMile/KmToMile";
import MileToKm from "../components/CalculatorDetails/MileToKm/MileToKm";

export enum CalculatorType {
  KmToMile,
  MileToKm,
}

export const CALCULATOR_DETAILS_COMPONENTS = {
  [CalculatorType.KmToMile]: KmToMile,
  [CalculatorType.MileToKm]: MileToKm,
};

import { Component, ReactComponentElement, ReactElement } from "react";
import { CalculatorType } from "../constants/enums";
import KmToMile from "./KmToMile";
import MileToKm from "./MileToKm";

export type CalculatorDefinition = {
  detailsComponent?: any;
  label?: string;
  primaryColor?: string;
  secondaryColor?: string;
};

export const CALCULATOR_DEFINITIONS: { [key: number]: CalculatorDefinition } = {
  [CalculatorType.KmToMile]: KmToMile,
  [CalculatorType.MileToKm]: MileToKm,
};

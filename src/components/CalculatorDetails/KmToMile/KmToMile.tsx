import React from "react";
import { CalculatorProps } from "../../../types/props";

type Props = Omit<CalculatorProps, "calculatorType">;

const KmToMile = ({ data }: Props) => {
  return <div>KmToMile: {data}</div>;
};

export default KmToMile;

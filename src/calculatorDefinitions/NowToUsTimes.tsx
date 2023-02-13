import { CalculatorDetailsProps } from "./definitionsMap";
import { DateTime } from "luxon";

const NowToUsTimesDetails = ({ locked }: CalculatorDetailsProps) => {
  const timeZones = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
  ];

  const now = DateTime.now();

  return (
    <div>
      {timeZones.map((t) => {
        const nowInTimeZone = now.setZone(t);
        return (
          <div>
            It's {nowInTimeZone.toFormat("h:mm a")} in{" "}
            {nowInTimeZone.toFormat("ZZZZ")}
          </div>
        );
      })}
    </div>
  );
};

export const NowToUsTimes = {
  detailsComponent: NowToUsTimesDetails,
  label: "Now to U.S. Times",
  primaryColor: "#e55b00",
  secondaryColor: "#fc812f",
};

export default NowToUsTimes;

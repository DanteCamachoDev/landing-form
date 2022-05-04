import Timebox from "../Components/TimeBox";
import { useState } from "react";

export default function Clock() {
  const [clockValues, setClockValues] = useState([
    { label: "Days", value: 5 },
    { label: "Hours", value: 17 },
    { label: "Minutes", value: 20 },
    { label: "Seconds", value: 15 },
  ]);

  return (
    <div class='flex mb-[46px] space-x-[97px]'>
      {clockValues.map((values) => {
        return <Timebox value={values.value} label={values.label} />;
      })}
    </div>
  );
}

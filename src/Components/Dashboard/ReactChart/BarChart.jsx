import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          data: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Friday",
            "Saturday",
          ],
        },
      ]}
      series={[
        { data: [4, 3, 5] },
        { data: [1, 6, 3] },
        { data: [2, 5, 6] },
        { data: [1, 6, 3] },
        { data: [2, 5, 6] },
        { data: [4, 3, 5] },
      ]}
      height={230}
    />
  );
}

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890];
const pData = [2400, 1398, 9800, 3908, 4800];
const xLabels = ["9/01", "8/01", "7/01", "6/01", "5/01"];

const InstructorChart = () => {
  return (
    <div>
      <BarChart
        className="w-full"
        height={300}
        series={[
          { data: pData, label: "pv", id: "pvId" },
          { data: uData, label: "uv", id: "uvId" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </div>
  );
};

export default InstructorChart;

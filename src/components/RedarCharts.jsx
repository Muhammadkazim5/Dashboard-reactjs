import { Radar } from "@mui/icons-material";
import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
} from "recharts";

const RedarCharts = () => {
  const data = [
    {
      subject: "JavaScript",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "HTML",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "CSS",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Angular",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Bootstrap",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Tailwind",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RedarCharts;

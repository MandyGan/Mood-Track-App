import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

// Register the necessary plugins
ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
export const LineChart = ({ ratings }) => {
  const [units, setUnits] = useState("hour");
  const handleOnUnitsChange = (evt) => {
    setUnits(evt.target.value);
  };
  // Prepare the data for the chart
  const chartData = {
    labels: ratings.map((rating) => rating.timestamp),
    datasets: [
      {
        label: "Rating",
        data: ratings.map((rating) => rating.rating),
        fill: false,
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  };

  console.log(chartData);

  // Configure the chart options
  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          // tooltipFormat: "MM/dd/yyyy hh:mm", // Customize the tooltip format as per your requirement
          unit: units,
        },
      },
      y: {
        suggestedMin: -2,
        suggestedMax: 2,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div>
      <label>
        Units
        <select value={units} onChange={handleOnUnitsChange}>
          <option value="hour">Hour</option>
          <option value="minute">Minute</option>
        </select>
      </label>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

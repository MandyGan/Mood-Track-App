import React from "react";
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

  // Configure the chart options
  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
          tooltipFormat: "ll HH:mm", // Customize the tooltip format as per your requirement
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
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

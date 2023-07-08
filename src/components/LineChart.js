import React from "react";
import { useState } from "react";
import { APP_STATES } from "../utils/constants";
import "./LineChart.css";
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

export const LineChart = ({ ratings, setCurrentScreen }) => {
  const [units, setUnits] = useState("hour");
  const handleOnUnitsChange = (evt) => {
    setUnits(evt.target.value);
  };
  const chartData = {
    labels: ratings.map((rating) => rating.timestamp),
    datasets: [
      {
        label: "Rating",
        data: ratings.map((rating) => rating.rating),
        fill: true,
        borderColor: "green",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 3,
      },
    ],
  };

  // Configure the chart options
  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
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
    <div className="lineChart">
      <label className="label">
        Units
        <select value={units} onChange={handleOnUnitsChange}>
          <option value="hour">Hour</option>
          <option value="minute">Minute</option>
          <option value="day">Day</option>
        </select>
      </label>
      <div className="chartWrapper">
        <Line data={chartData} options={chartOptions} />
      </div>
      <button
        className="backButton"
        onClick={() => setCurrentScreen(APP_STATES.viewReport)}>
        Back to ViewReport
      </button>
    </div>
  );
};

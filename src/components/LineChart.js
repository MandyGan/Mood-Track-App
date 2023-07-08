import React from "react";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
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
  const [units, setUnits] = useState("minute");
  const handleOnUnitsChange = (evt, newValue) => {
    setUnits(newValue);
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
      <Select
        color="warning"
        placeholder="Units"
        variant="solid"
        value={units}
        defaultValue="minute"
        onChange={handleOnUnitsChange}>
        <Option value="minute">Minute</Option>
        <Option value="hour">Hour</Option>
        <Option value="day">Day</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
      </Select>
      <div className="chartWrapper">
        <Line data={chartData} options={chartOptions} />
      </div>
      <Button
        size="md"
        color="primary"
        onClick={() => setCurrentScreen(APP_STATES.home)}>
        Back to Home
      </Button>
    </div>
  );
};

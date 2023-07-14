import React, { useMemo } from "react";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import { APP_STATES } from "../utils/constants";
import { getTimeRange } from "../utils/mathFunctions";
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
  const [units, setUnits] = useState("month");

  const handleOnUnitsChange = (evt, newValue) => {
    setUnits(newValue);
  };

  const filteredRatings = useMemo(() => {
    const currentTime = new Date().getTime();
    const timeRange = getTimeRange(units);
    return ratings.filter(
      (rating) => currentTime - rating.timestamp < timeRange
    );
  }, [ratings, units]);

  const chartData = {
    labels: filteredRatings.map((rating) => rating.timestamp),
    datasets: [
      {
        label: "Rating",
        data: filteredRatings.map((rating) => rating.rating),
        fill: true,
        borderColor: "green",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 3,
      },
    ],
  };

  // Configure the chart options
  const xAxisUnitsMap = {
    hour: "minute",
    day: "hour",
    week: "day",
    month: "day",
  };
  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: xAxisUnitsMap[units],
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
        <Option value="hour">Last Hour</Option>
        <Option value="day">Last Day</Option>
        <Option value="week">Past 7 Days</Option>
        <Option value="month">Past 30 Days</Option>
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

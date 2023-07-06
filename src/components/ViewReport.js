import React from "react";
import { APP_STATES } from "../utils/constants";
import { LineChart } from "./LineChart";

export const ViewReport = ({ setCurrentScreen, ratings, feelingsData }) => {
  return (
    <div className="viewReport">
      <div>
        <h1>Rating Chart</h1>
        <LineChart ratings={ratings} />
      </div>
      <div>
        <h2>Feelings:</h2>
        <ul>
          {feelingsData.map((feeling, index) => (
            <li key={index}>
              Feeling: {feeling.text}, Count: {feeling.count}, Timestamps:{" "}
              {feeling.timestamps.join(", ")}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setCurrentScreen(APP_STATES.home)}>Back</button>
    </div>
  );
};

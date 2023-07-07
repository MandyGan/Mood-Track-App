import React from "react";
import { APP_STATES } from "../utils/constants";

export const ViewReport = ({ setCurrentScreen }) => {
  return (
    <div className="viewReport">
      <button onClick={() => setCurrentScreen(APP_STATES.lineChart)}>
        Your Mood Chart
      </button>
      <div>
        <button onClick={() => setCurrentScreen(APP_STATES.wordCloud)}>
          Your Feeling Cloud
        </button>
      </div>
      <button onClick={() => setCurrentScreen(APP_STATES.home)}>Back</button>
    </div>
  );
};

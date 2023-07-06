import "./ViewReport.css";
import { APP_STATES } from "../utils/constants";

export const ViewReport = ({ setCurrentScreen, ratings, feelings }) => {
  return (
    <div className="viewReport">
      <div>{ratings.join(", ")}</div>
      <div>{feelings.join(", ")}</div>
      <button onClick={() => setCurrentScreen(APP_STATES.home)}>Back</button>
    </div>
  );
};

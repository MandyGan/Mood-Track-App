import "./ViewReport.css";
import { APP_STATES } from "../utils/constants";

export const ViewReport = ({ setCurrentScreen, ratings }) => {
  return (
    <div className="viewReport">
      {ratings.join(", ")}
      <button onClick={() => setCurrentScreen(APP_STATES.home)}>Back</button>
    </div>
  );
};

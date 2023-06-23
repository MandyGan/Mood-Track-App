import "./ViewReport.css";
import { APP_STATES } from "../utils/constants";

export const ViewReport = ({ setCurrentScreen, ratings }) => {
  return (
    <div>
      {ratings.join(", ")}
      <button onClick={() => setCurrentScreen(APP_STATES.home)}>Back</button>
    </div>
  );
};
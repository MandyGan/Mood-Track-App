import { APP_STATES } from "../utils/constants";
import "./HomeScreen.css";

export const HomeScreen = ({ setCurrentScreen }) => {
  return (
    <div className="homeScreenContainer">
      <button
        className="homeButton logButton"
        onClick={() => setCurrentScreen(APP_STATES.newRating)}>
        log
      </button>
      <button
        className="homeButton reportButton"
        onClick={() => setCurrentScreen(APP_STATES.viewReport)}>
        report
      </button>
    </div>
  );
};

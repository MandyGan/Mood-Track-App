import { useState, useEffect } from "react";
import "./App.css";
import {
  HomeScreen,
  NewRatingForm,
  ViewReport,
  NewInput,
  LineChart,
  FeelingWordCloud,
} from "./components";
import { APP_STATES } from "./utils/constants";

const getInitialRatingData = () => {
  const ratingData = localStorage.getItem("moodRatings");
  if (!ratingData) {
    return [];
  } else {
    return JSON.parse(ratingData);
  }
};
const getInitialFeelingsData = () => {
  try {
    const feelingData = localStorage.getItem("moodFeelingsData");
    if (!feelingData) {
      return [];
    } else {
      return JSON.parse(feelingData);
    }
  } catch (error) {
    console.error("Error parsing feelings data:", error);
    return [];
  }
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_STATES.home);
  const [ratings, setRatings] = useState(getInitialRatingData);
  const [feelingsData, setFeelingsData] = useState(getInitialFeelingsData);

  useEffect(() => {
    localStorage.setItem("moodRatings", JSON.stringify(ratings));
    localStorage.setItem("moodFeelingsData", JSON.stringify(feelingsData));
  }, [ratings, feelingsData]);

  return (
    <div className="appContainer">
      {currentScreen === APP_STATES.home ? (
        <HomeScreen setCurrentScreen={setCurrentScreen} />
      ) : null}

      {currentScreen === APP_STATES.newRating ? (
        <NewRatingForm
          setRatings={setRatings}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === APP_STATES.input ? (
        <NewInput
          setFeelingsData={setFeelingsData}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === APP_STATES.viewReport ? (
        <ViewReport setCurrentScreen={setCurrentScreen} />
      ) : null}

      {currentScreen === APP_STATES.lineChart ? (
        <LineChart ratings={ratings} setCurrentScreen={setCurrentScreen} />
      ) : null}

      {currentScreen === APP_STATES.wordCloud ? (
        <FeelingWordCloud
          feelingsData={feelingsData}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}
    </div>
  );
}

export default App;

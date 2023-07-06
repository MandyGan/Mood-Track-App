import { useState, useEffect } from "react";
import "./App.css";
import { HomeScreen, NewRatingForm, ViewReport, NewInput } from "./components";
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
  const feelingData = localStorage.getItem("moodFeelingsData");
  if (!feelingData) {
    return [];
  } else {
    return JSON.parse(feelingData);
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

      {currentScreen === APP_STATES.viewReport ? (
        <ViewReport
          ratings={ratings}
          feelingsData={feelingsData}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === APP_STATES.input ? (
        <NewInput
          feelingsData={feelingsData}
          setFeelingsData={setFeelingsData}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}
    </div>
  );
}

export default App;

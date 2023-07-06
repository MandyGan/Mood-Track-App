import { useState } from "react";
import "./App.css";
import { HomeScreen, NewRatingForm, ViewReport, NewInput } from "./components";
import { APP_STATES } from "./utils/constants";

function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_STATES.home);
  const [ratings, setRatings] = useState([1, 2, -1, 0]);
  const [feelings, setFeelings] = useState(["happy", "sad", "excited"]);

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
          feelings={feelings}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === APP_STATES.input ? (
        <NewInput
          setFeelings={setFeelings}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}
    </div>
  );
}

export default App;

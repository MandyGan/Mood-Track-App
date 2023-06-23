import { useState } from "react";
import "./App.css";
import { HomeScreen, NewRatingForm, ViewReport } from "./components";
import { APP_STATES } from "./utils/constants";

function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_STATES.home);
  const [ratings, setRatings] = useState([1, 2, -1, 0]);

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
        <ViewReport ratings={ratings} setCurrentScreen={setCurrentScreen} />
      ) : null}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { HomeScreen } from "./components";
import { APP_STATES } from "./utils/constants";
function App() {
  const [currentScreen, setCurrentScreen] = useState(APP_STATES.home);

  return (
    <div className="appContainer">
      {currentScreen === APP_STATES.home ? (
        <HomeScreen setCurrentScreen={setCurrentScreen} />
      ) : null}

      {currentScreen === APP_STATES.newRating ? "New Rating Form" : null}

      {currentScreen === APP_STATES.viewReport ? "Report Goes Here" : null}
    </div>
  );
}

export default App;

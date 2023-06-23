import { APP_STATES } from "../utils/constants";
import "./NewRatingForm.css";

export const NewRatingForm = ({ setRatings, setCurrentScreen }) => {
  return (
    <div className="newRatingForm">
      <button
        className="emojiButton"
        onClick={() => {
          setRatings((ratings) => [...ratings, -2]);
          setCurrentScreen(APP_STATES.home);
        }}
      >
        -2
      </button>
      <button
        className="emojiButton"
        onClick={() => {
          setRatings((ratings) => [...ratings, -1]);
          setCurrentScreen(APP_STATES.home);
        }}
      >
        -1
      </button>
      <button
        className="emojiButton"
        onClick={() => {
          setRatings((ratings) => [...ratings, 0]);
          setCurrentScreen(APP_STATES.home);
        }}
      >
        0
      </button>
      <button
        className="emojiButton"
        onClick={() => {
          setRatings((ratings) => [...ratings, 1]);
          setCurrentScreen(APP_STATES.home);
        }}
      >
        +1
      </button>
      <button
        className="emojiButton"
        onClick={() => {
          setRatings((ratings) => [...ratings, 2]);
          setCurrentScreen(APP_STATES.home);
        }}
      >
        +2
      </button>
    </div>
  );
};

import { APP_STATES } from "../utils/constants";
import "./NewRatingForm.css";
import { EmojiButton } from "./EmojiButton";

export const NewRatingForm = ({ setRatings, setCurrentScreen }) => {
  const handleButtonClick = (rating) => {
    setRatings((ratings) => [...ratings, rating]);
    setCurrentScreen(APP_STATES.input);
  };

  return (
    <div className="newRatingForm">
      <EmojiButton handleClick={() => handleButtonClick(-1)} text={-2} />
      <EmojiButton handleClick={() => handleButtonClick(-1)} text={-1} />
      <EmojiButton handleClick={() => handleButtonClick(0)} text={0} />
      <EmojiButton handleClick={() => handleButtonClick(1)} text={1} />
      <EmojiButton handleClick={() => handleButtonClick(2)} text={2} />
    </div>
  );
};

import { APP_STATES } from "../utils/constants";
import "./NewRatingForm.css";
import { EmojiButton } from "./EmojiButton";
import Button from "@mui/joy/Button";

export const NewRatingForm = ({ setRatings, setCurrentScreen }) => {
  const handleButtonClick = (rating) => {
    const timestamp = new Date().getTime(); // Generate the current timestamp
    const ratingObject = { rating, timestamp };
    setRatings((prevRatings) => [...prevRatings, ratingObject]);
    setCurrentScreen(APP_STATES.input);
  };

  return (
    <div className="newRatingForm">
      <h1 className="h1">How are you feeling?</h1>
      <div className="buttonContainer">
        <EmojiButton
          handleClick={() => handleButtonClick(-1)}
          text={-2}
          color={"red"}
        />
        <EmojiButton
          handleClick={() => handleButtonClick(-1)}
          text={-1}
          color={"orange"}
        />
        <EmojiButton
          handleClick={() => handleButtonClick(0)}
          text={0}
          color={"yellow"}
        />
        <EmojiButton
          handleClick={() => handleButtonClick(1)}
          text={1}
          color={"green"}
        />
        <EmojiButton
          handleClick={() => handleButtonClick(2)}
          text={2}
          color={"blue"}
        />
      </div>
      <div className="button">
        <Button
          size="md"
          color="primary"
          onClick={() => setCurrentScreen(APP_STATES.home)}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

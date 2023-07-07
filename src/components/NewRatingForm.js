import { APP_STATES } from "../utils/constants";
import "./NewRatingForm.css";
import { EmojiButton } from "./EmojiButton";

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function generateFakeRatings() {
//   const ratings = [];

//   for (let i = 0; i < 40; i++) {
//     ratings.push({
//       rating: getRandomInt(3) * (Math.random() > 0.5 ? 1 : -1),
//       timestamp: new Date().getTime() - i * 1000 * 60 * 60,
//     });
//   }
// }

export const NewRatingForm = ({ setRatings, setCurrentScreen }) => {
  const handleButtonClick = (rating) => {
    const timestamp = new Date().getTime(); // Generate the current timestamp
    const ratingObject = { rating, timestamp };
    setRatings((prevRatings) => [...prevRatings, ratingObject]);
    setCurrentScreen(APP_STATES.input);
  };

  return (
    <div className="newRatingForm">
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
  );
};

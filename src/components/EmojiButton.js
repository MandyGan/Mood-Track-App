import "./EmojiButton.css";

export const EmojiButton = ({ handleClick, text }) => {
  return (
    <button className="emojiButton" onClick={handleClick}>
      {text}
    </button>
  );
};

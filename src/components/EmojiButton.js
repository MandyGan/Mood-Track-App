import "./EmojiButton.css";

export const EmojiButton = ({ handleClick, text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button className="emojiButton" style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

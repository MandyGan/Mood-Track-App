import { useState } from "react";
import { APP_STATES } from "../utils/constants";

export const NewInput = (setFeelings, setCurrentScreen) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = (feeling) => {
    setCurrentScreen(APP_STATES.input);
  };
  const validate = (feeling) => {
    if (feeling.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  const handleChange = (e) => {
    validate(e.target.value);
    setInput(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>You feeling at the moment is: {input}</h1>
      <label htmlFor="feeling"></label>
      <input
        type="text"
        placeholder="type how you feel!"
        name="feeling"
        id="feeling"
        onChange={handleChange}
        value={input}
      />
      {!isValid && <p style={{ color: "red" }}>The feeling can not be empty</p>}
      <button>Submit</button>
    </form>
  );
};

//only render a type box
//a submit button
//keep track of what you type in
//save it and render it

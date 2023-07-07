import { useState } from "react";
import { APP_STATES } from "../utils/constants";
import "./NewInput.css";

export const NewInput = ({ setFeelingsData, setCurrentScreen }) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const timestamp = new Date().getTime(); // Generate the current timestamp
      const trimmedInput = input.trim();

      setFeelingsData((feelingsData) => {
        const existingFeeling = feelingsData.find(
          (feeling) => feeling.text === trimmedInput
        );

        if (existingFeeling) {
          const updatedFeelingsData = feelingsData.map((feeling) => {
            if (feeling.text === trimmedInput) {
              return {
                ...feeling,
                count: feeling.count + 1,
                timestamps: [...feeling.timestamps, timestamp],
              };
            }
            return feeling;
          });
          return updatedFeelingsData;
        } else {
          const newFeeling = {
            text: trimmedInput,
            count: 1,
            timestamps: [timestamp],
          };
          return [...feelingsData, newFeeling];
        }
      });
    }
    setInput("");
    setCurrentScreen(APP_STATES.home); // Navigate back to the home screen after submitting
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
    <div className="newInput">
      <form onSubmit={handleSubmit}>
        <h1>At this moment, I feel {input}</h1>
        <label htmlFor="feeling"></label>
        <input
          type="text"
          placeholder="type how you feel!"
          name="feeling"
          id="feeling"
          onChange={handleChange}
          value={input}
        />
        {!isValid && (
          <p style={{ color: "red" }}>The feeling cannot be empty...</p>
        )}
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

import { useState } from "react";
import { APP_STATES } from "../utils/constants";
import Button from "@mui/joy/Button";
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
        setFeelingsData((prevFeelings) => {
          const existingFeelingIndex = prevFeelings.findIndex(
            (feeling) => feeling.text === trimmedInput
          );
          if (existingFeelingIndex !== -1) {
            const updatedFeelingsData = [...prevFeelings];
            const existingFeeling = updatedFeelingsData[existingFeelingIndex];
            existingFeeling.count += 1;
            existingFeeling.timestamps.push(timestamp);
            return updatedFeelingsData;
          } else {
            const newFeeling = {
              text: trimmedInput,
              count: 1,
              timestamps: [timestamp],
            };
            return [...prevFeelings, newFeeling];
          }
        });

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
        <div className="groupInputButton">
          <label htmlFor="feeling"></label>
          <input
            type="text"
            placeholder="Describe your feeling in a word..."
            name="feeling"
            id="feeling"
            onChange={handleChange}
            value={input}
          />
          <button className="submitButton">Submit</button>
        </div>

        {!isValid && (
          <p style={{ color: "red" }}>The feeling cannot be empty...</p>
        )}
      </form>
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

import { APP_STATES } from "../utils/constants";
export const WordCloud = ({ feelingsData, setCurrentScreen }) => {
  return (
    <div>
      <h2>Feelings:</h2>
      <ul>
        {feelingsData.map((feeling, index) => (
          <li key={index}>
            Feeling: {feeling.text}, Count: {feeling.count}, Timestamps:{" "}
            {feeling.timestamps.join(", ")}
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentScreen(APP_STATES.viewReport)}>
        Back
      </button>
    </div>
  );
};

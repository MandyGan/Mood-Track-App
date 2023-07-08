import React from "react";
import { APP_STATES } from "../utils/constants";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

export const FeelingWordCloud = ({ feelingsData, setCurrentScreen }) => {
  const transformDataForWordCloud = (feelingsData) => {
    return feelingsData.map((feeling) => ({
      text: feeling.text,
      value: feeling.count * 500,
    }));
  };
  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

  const wordCloudData = transformDataForWordCloud(feelingsData);
  return (
    <div className="wordCloud">
      <WordCloud
        data={wordCloudData}
        font="Montserrat"
        fontWeight="bold"
        rotate={(word) => 0}
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
        onWordClick={(event, d) => {
          const wordIndex = wordCloudData.findIndex(
            (feeling) => feeling.text === d.text
          );
          const dCount = wordCloudData[wordIndex].value / 500;
          console.log(`You felt ${d.text} for ${dCount} times!`);
        }}
      />
      <button onClick={() => setCurrentScreen(APP_STATES.viewReport)}>
        Back to ViewReport
      </button>
    </div>
  );
};

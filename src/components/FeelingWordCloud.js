import React, { useState } from "react";
import { APP_STATES } from "../utils/constants";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { Bubble } from "./Bubble";
import Button from "@mui/joy/Button";
import "./FeelingWordCloud.css";

export const FeelingWordCloud = ({ feelingsData, setCurrentScreen }) => {
  const transformDataForWordCloud = (feelingsData) => {
    return feelingsData.map((feeling) => ({
      text: feeling.text,
      value: feeling.count * 500,
    }));
  };

  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
  const [clicked, setClicked] = useState({ text: null, count: 0 });
  const wordCloudData = transformDataForWordCloud(feelingsData);
  const handleWordClick = (event, d) => {
    const wordIndex = wordCloudData.findIndex(
      (feeling) => feeling.text === d.text
    );
    const text = d.text;
    const dCount = wordCloudData[wordIndex].value / 500;
    setClicked({ text: text, count: dCount });
  };
  const handleBubbleClose = () => {
    setClicked({ text: null, count: 0 });
  };

  return (
    <div className="wordCloudContainer">
      <div className="wordCloud">
        <WordCloud
          data={wordCloudData}
          width={1000}
          height={300}
          font="Montserrat"
          fontWeight="bold"
          rotate={(word) => 0}
          fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
          onWordClick={handleWordClick}
        />
      </div>
      {clicked.text !== null && (
        <Bubble
          className="bubble"
          clicked={clicked}
          onClose={handleBubbleClose}
        />
      )}
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

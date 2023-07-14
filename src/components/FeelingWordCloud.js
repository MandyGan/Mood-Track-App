import React, { useMemo, useState } from "react";
import { APP_STATES } from "../utils/constants";
import { getTimeRange } from "../utils/mathFunctions";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { Bubble } from "./Bubble";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import "./FeelingWordCloud.css";

export const FeelingWordCloud = ({ feelings, setCurrentScreen }) => {
  const transformDataForWordCloud = (feelings) => {
    return feelings.map((feeling) => ({
      text: feeling.text,
      value: feeling.count * 500,
    }));
  };
  const [units, setUnits] = useState("month");
  const handleOnUnitsChange = (evt, newValue) => {
    setUnits(newValue);
  };
  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
  const [clicked, setClicked] = useState({ text: null, count: 0 });

  const filteredFeelings = useMemo(() => {
    const currentTime = new Date().getTime();
    const timeRange = getTimeRange(units);
    return feelings
      .map((feeling) => {
        const filteredTimestamps = feeling.timestamps.filter(
          (timestamp) => currentTime - timestamp < timeRange
        );
        const updatedCount = filteredTimestamps.length;
        return { ...feeling, count: updatedCount };
      })
      .filter((feeling) => feeling.count > 0);
  }, [feelings, units]);

  const wordCloudData = transformDataForWordCloud(filteredFeelings);

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
      <Select
        color="warning"
        placeholder="Units"
        variant="solid"
        //the units will be updated based on the data extracted
        value={units}
        defaultValue="month"
        onChange={handleOnUnitsChange}>
        <Option value="hour">Last Hour</Option>
        <Option value="day">Last Day</Option>
        <Option value="week">Past 7 Days</Option>
        <Option value="month">Past 30 Days</Option>
      </Select>
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

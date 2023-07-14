import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { LineChart } from "./LineChart";
import { FeelingWordCloud } from "./FeelingWordCloud";

export const ViewReport = ({ ratings, feelings, setCurrentScreen }) => {
  return (
    <div>
      <Tabs
        aria-label="Basic tabs"
        defaultValue={0}
        sx={{ borderRadius: "lg" }}>
        <TabList>
          <Tab>Mood Chart</Tab>
          <Tab>Feelings Word Cloud</Tab>
        </TabList>
        <TabPanel value={0} sx={{ p: 2 }}>
          <LineChart ratings={ratings} setCurrentScreen={setCurrentScreen} />
        </TabPanel>
        <TabPanel value={1} sx={{ p: 2 }}>
          <FeelingWordCloud
            feelings={feelings}
            setCurrentScreen={setCurrentScreen}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

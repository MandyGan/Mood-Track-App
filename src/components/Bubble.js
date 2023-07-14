import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "./Bubble.css";

export const Bubble = ({ clicked, onClose }) => {
  let time = "time";
  if (clicked.count > 1) {
    time = "times";
  }
  return (
    <div className="bubble">
      <p>
        {`You felt ${clicked.text} for ${clicked.count} ${time}!`}{" "}
        <IconButton onClick={onClose} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </p>
    </div>
  );
};

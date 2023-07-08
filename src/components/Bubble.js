import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "./Bubble.css";

export const Bubble = ({ clicked, onClose }) => {
  return (
    <div className="bubble">
      <p>
        {`You felt ${clicked.text} for ${clicked.count} times!`}{" "}
        <IconButton onClick={onClose} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </p>
    </div>
  );
};

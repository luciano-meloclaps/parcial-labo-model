import React from "react";

const Buttons = (props) => {
  return (
    <button
      style={{ color: props.color, margin: props.margin, cursor: "pointer" }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Buttons;

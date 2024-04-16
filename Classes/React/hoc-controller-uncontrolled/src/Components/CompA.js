import React from "react";
import HOC from "../HOC";

const CompA = (props) => {
  return <div style={props.style}>CompA</div>;
};

export default HOC(CompA);

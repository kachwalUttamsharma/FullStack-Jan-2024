import React from "react";
import Children from "./Children";

const Parent = ({ info }) => {
  return (
    <div className="parent">
      <div>Parent</div>
      <div>{info?.familyName}</div>
      <div>{info?.onlyForParents()}</div>
      <Children info={info} />
    </div>
  );
};

export default Parent;

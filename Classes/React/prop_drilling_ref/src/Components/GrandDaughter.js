import React from "react";

const GrandDaughter = ({ info }) => {
  return (
    <div className="gdaughter">
      <div>GrandDaughter</div>
      <div>{info?.familyName}</div>
      <div>{info?.onlyForGrandchildren()}</div>
    </div>
  );
};

export default GrandDaughter;

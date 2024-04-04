import React from "react";

const GrandSon = ({ info }) => {
  return (
    <div className="gson">
      <div>GrandSon</div>
      <div>{info?.familyName}</div>
      <div>{info?.onlyForGrandchildren()}</div>
    </div>
  );
};

export default GrandSon;

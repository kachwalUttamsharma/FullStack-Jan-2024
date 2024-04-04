import React from "react";
import Parent from "./Parent";

const Family = ({ info }) => {
  console.log(info);
  return (
    <div className="family">
      <div>Family</div>
      <div>{info?.familyName}</div>
      <Parent info={info} />
    </div>
  );
};

export default Family;

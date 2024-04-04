import React, { useContext } from "react";
import Parent from "./Parent";
import { FamilyContext } from "../Context/FamilyContext";

const Family = () => {
  const { familyInfo } = useContext(FamilyContext);
  return (
    <div className="family">
      <div>Family</div>
      <div>{familyInfo?.familyName}</div>
      <Parent />
    </div>
  );
};

export default Family;

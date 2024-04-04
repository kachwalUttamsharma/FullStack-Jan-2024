import React, { useContext } from "react";
import { FamilyContext } from "../Context/FamilyContext";

const GrandDaughter = () => {
  const { familyInfo } = useContext(FamilyContext);
  return (
    <div className="gdaughter">
      <div>GrandDaughter</div>
      <div>{familyInfo?.familyName}</div>
      <div>{familyInfo?.onlyForGrandchildren()}</div>
    </div>
  );
};

export default GrandDaughter;

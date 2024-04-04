import React, { useContext } from "react";
import { FamilyContext } from "../Context/FamilyContext";

const GrandSon = () => {
  const { familyInfo } = useContext(FamilyContext);
  return (
    <div className="gson">
      <div>GrandSon</div>
      <div>{familyInfo?.familyName}</div>
      <div>{familyInfo?.onlyForGrandchildren()}</div>
    </div>
  );
};

export default GrandSon;

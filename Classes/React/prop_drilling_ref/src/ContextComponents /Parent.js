import React, { useContext } from "react";
import Children from "./Children";
import { FamilyContext } from "../Context/FamilyContext";

const Parent = () => {
  const { familyInfo } = useContext(FamilyContext);
  return (
    <div className="parent">
      <div>Parent</div>
      <div>{familyInfo?.familyName}</div>
      <div>{familyInfo?.onlyForParents()}</div>
      <Children />
    </div>
  );
};

export default Parent;

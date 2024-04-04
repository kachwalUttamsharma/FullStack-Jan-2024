import React, { useContext } from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";
import { FamilyContext } from "../Context/FamilyContext";

const Children = () => {
  const { familyInfo } = useContext(FamilyContext);
  return (
    <div className="children">
      <div>Children</div>
      <div>{familyInfo?.familyName}</div>
      <div>{familyInfo?.onlyForChildren()}</div>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
};

export default Children;

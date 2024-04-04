import React from "react";

export const FamilyContext = React.createContext();

const FamilyProvider = ({ children }) => {
  const familyInfo = {
    familyName: "The Griffins",
    onlyForParents: () => {
      return "Info for Parents";
    },
    onlyForChildren: () => {
      return "Info for Children";
    },
    onlyForGrandchildren: () => {
      return "Info for Grandchildren";
    },
  };
  return (
    <FamilyContext.Provider value={{ familyInfo }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;

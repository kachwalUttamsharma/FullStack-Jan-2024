import React from "react";
import "../App.css";
import MainContainerChild from "./MainContainerChild";

const MainContainer = () => {
  // jsx
  // can we write css also in jsx
  const headingName = "Main Container";
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        backgroundColor: "orange",
        width: "100%",
      }}
    >
      <h1>{headingName}</h1>
      {10 + 20}
      <MainContainerChild ChildData={"1,2,34,43445"} />
    </div>
  );
};

export default MainContainer;

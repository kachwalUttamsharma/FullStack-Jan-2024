import React from "react";

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  white: {
    backgroundColor: "white",
    color: "black",
  },
  lightBlue: {
    backgroundColor: "lightBlue",
    color: "black",
  },
};
const HOC = (WrapperComponent) => {
  return function (args) {
    let temp = {};
    if (args.dark) {
      temp = { ...styles.dark };
    } else if (args.lightBlue) {
      temp = { ...styles.lightBlue };
    } else {
      temp = { ...styles.white };
    }
    const obj = { style: temp, ...args };
    return <WrapperComponent {...obj} />;
  };
};

export default HOC;

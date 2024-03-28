import React from "react";

const NumberList = ({ numbers, incrementNumber }) => {
  console.log("from number list");
  return (
    <>
      <h2>Un-Optimized</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            {number}
            <button onClick={() => incrementNumber(index)}>Increment</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NumberList;

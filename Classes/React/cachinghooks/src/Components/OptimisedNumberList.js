import React from "react";

const OptimisedNumberList = ({ numbers, incrementNumber }) => {
  console.log("from optimised number list");
  return (
    <>
      <h2>Optimized</h2>
      <ul>
        {numbers.map((number, index) => (
          <MemoizedNumberItem
            key={index}
            number={number}
            onClick={() => incrementNumber(index)}
          />
        ))}
      </ul>
    </>
  );
};

// it caches the component
const MemoizedNumberItem = React.memo(({ number, onClick }) => {
  console.log("MemoizedNumberitem re-rendered");
  return (
    <li>
      {number}
      <button onClick={onClick}>Increment</button>
    </li>
  );
});

export default OptimisedNumberList;

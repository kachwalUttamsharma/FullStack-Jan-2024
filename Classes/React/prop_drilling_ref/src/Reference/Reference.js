import React, { useEffect, useState, useRef } from "react";

// i want to persist the value between multiple
// re-renders calls without using state hook
const Reference = () => {
  const [name, setName] = useState("");
  //   const [count, setCount] = useState(0);
  let count1 = useRef(0);
  // { currentValue: }
  console.log(count1);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // setCount((prevCount) => prevCount + 1);
    count1 = count1.current++;
  }, [name, showMessage]);
  return (
    <div>
      <div>Reference</div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>Number of times component got rendered {count1.current}</div>
      <button
        onClick={() => {
          setShowMessage(!showMessage);
        }}
      >
        Submit
      </button>
      {showMessage && <div>Show Message is True</div>}
    </div>
  );
};

export default Reference;

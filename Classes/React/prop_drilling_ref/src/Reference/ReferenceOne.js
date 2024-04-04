import React, { useState, useRef } from "react";

const ReferenceOne = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const clear = () => {
    setName("");
  };
  const changeColor = () => {
    console.log(inputRef);
    console.log(inputRef?.current?.value);
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "tomato";
  };
  return (
    <div>
      <h1>Use Ref Dom Explame</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clear}>Clear</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ReferenceOne;

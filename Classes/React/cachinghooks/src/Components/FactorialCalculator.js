import React, { useState, useMemo } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const calculateFactorial = (num) => {
    console.log("inside factorial calculation");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);
  return (
    <div>
      <h2>FactorialCalculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        Factorial of {number} is: <b>{factorial}</b>
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Trigger Re-render
      </button>
      <p>Render Count: {count}</p>
    </div>
  );
};

export default FactorialCalculator;

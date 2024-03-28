import React, { useCallback, useState } from "react";
import NumberList from "./NumberList";
import OptimisedNumberList from "./OptimisedNumberList";

const NumberListContainer = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);

  const incrementNumberWithoutCallback = (index) => {
    console.log("incrementNumberWithoutCallback");
    const newNumber = [...numbers];
    newNumber[index] += 1;
    setNumbers(newNumber);
  };

  const incrementNumberWithCallback = useCallback(
    (index) => {
      console.log("incrementNumberWithCallback");
      const newNumber = [...numbers];
      newNumber[index] += 1;
      setNumbers(newNumber);
    },
    [numbers]
  );
  return (
    <div>
      <h2>NumberListContainer</h2>
      <NumberList
        numbers={numbers}
        incrementNumber={incrementNumberWithoutCallback}
      />
      <OptimisedNumberList
        numbers={numbers}
        incrementNumber={incrementNumberWithCallback}
      />
    </div>
  );
};

export default NumberListContainer;

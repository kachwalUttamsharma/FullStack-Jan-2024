import React, { Fragment, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function Increment_Value() {
    count += 1;
    setCount(count);
  }

  function Decrement_Value() {
    count -= 1;
    setCount(count);
  }
  return (
    <Fragment>
      <div>Counter</div>
      <div>The count value is {count}</div>
      <button onClick={Increment_Value}>Increment_Value</button>
      <button onClick={Decrement_Value}>Decrement_Value</button>
    </Fragment>
  );
};

export default Counter;

import React, { Fragment } from "react";

const Counter = () => {
  let count = 0;

  function Increment_Value() {
    count += 1;
    console.log(count);
  }

  function Decrement_Value() {
    count -= 1;
    console.log(count);
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

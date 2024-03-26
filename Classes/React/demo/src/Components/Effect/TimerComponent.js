import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will be called when the component mounts
    console.log("Component mounted.");

    // Set up an interval to update the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // The return function in useEffect serves as the cleanup function
    // It is called when the component unmounts or just before the effect runs again
    return () => {
      console.log("Component unmounted.");
      clearInterval(intervalId); // Cleanup: clear the interval to avoid memory leaks
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
};

export default TimerComponent;

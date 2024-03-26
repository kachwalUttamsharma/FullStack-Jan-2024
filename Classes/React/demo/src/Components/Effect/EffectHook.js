import React, { useEffect, useState } from "react";

const Effects = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("Google.com");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  console.log("before");
  // this will execute every time
  useEffect(() => {
    // effect
    console.log("this will execute every time");
  });
  // componentDidMount - only once
  useEffect(() => {
    // effect
    console.log("This is an example componentDidMount");
  }, []);

  // componentDidUpdate - when url param changes
  useEffect(() => {
    // effect
    console.log(`${url} got changed`);
    console.log("This is an example componentDidUpdate");
  }, [url]);

  useEffect(() => {
    console.log("attach listener");
    window.addEventListener("resize", updateWindowHeight);
    return () => {
      console.log("detach listener");
      window.removeEventListener("resize", updateWindowHeight);
    };
  });
  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  console.log("after");
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const urlHandler = (e) => {
    setUrl(e.target.value);
  };
  return (
    <>
      <div>Effects</div>
      <input
        id="name"
        type="text"
        value={name}
        onChange={nameHandler}
        placeholder="name"
      />
      <input
        id="url"
        type="text"
        value={url}
        onChange={urlHandler}
        placeholder="Enter URL"
      />
      <h2> The window height is: {windowHeight}</h2>
    </>
  );
};

export default Effects;

{
  /* <div id="parent">
  <div id="child">
    <h1 id="greeting">Hello From React</h1>
    <h1 id="greeting1">Hello From React-1</h1>
  </div>
</div>; */
}

const greeting = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "greeting" }, "Hello from React"),
    React.createElement(
      "h1",
      { id: "greeting1" },
      "Hello from React heading 2"
    ),
  ])
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(greeting);

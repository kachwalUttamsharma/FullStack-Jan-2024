import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";

function App() {
  return (
    <div id="parent">
      <div id="child">
        <h1 id="greeting">Hello From React</h1>
        <h1 id="greeting1">Hello From React-1</h1>
      </div>
      <Heading />
    </div>
  );
}

export default App;

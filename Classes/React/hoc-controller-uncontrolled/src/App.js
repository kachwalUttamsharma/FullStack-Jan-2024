import "./App.css";
import CompA from "./Components/CompA";
import Uncontrolled from "./Components/Uncontrolled";
import Controlled from "./Components/Controlled";

function App() {
  return (
    <div className="App">
      <CompA />
      <CompA dark />
      <CompA lightBlue />
      <Controlled />
      <Uncontrolled />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
function App() {
  return (
    <div id="parent">
      <Heading />
      {/* <Navbar />
      <MainContainer />
      <Footer /> */}
      <Counter />
    </div>
  );
}

export default App;

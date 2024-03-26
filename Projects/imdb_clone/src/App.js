import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Navbar />
              <Banner />
              <Movies />
            </Fragment>
          }
        ></Route>
        <Route path="/watchList" element={<WatchList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

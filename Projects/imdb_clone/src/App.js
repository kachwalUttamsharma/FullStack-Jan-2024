import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies/Movies";
// import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";

const WatchList = lazy(() => import("./Components/WatchList"));
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              {/* <Banner /> */}
              <Movies />
            </Fragment>
          }
        ></Route>
        <Route
          path="/watchList"
          element={
            <Suspense fallback={<h2>Loading ... </h2>}>
              <WatchList />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

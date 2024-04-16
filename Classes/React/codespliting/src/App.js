import "./App.css";

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Products from "./Components/Products";
// import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar";
// intial metrics 436 kB 106 ms

const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Products = lazy(() => import("./Components/Products"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
function App() {
  // const [movies, setMovies] = useState([]);
  // const getMovies = () => {
  //   import("./data").then((module) => {
  //     console.log(module);
  //     setMovies(module?.moviesData);
  //   });
  //   //setMovies(moviesData);
  // };
  return (
    <div className="App">
      {/* <h1>These are the movies</h1>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies?.length > 0 && JSON.stringify(movies)}</p> */}
      <Suspense fallback={<h2>Loading .....</h2>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

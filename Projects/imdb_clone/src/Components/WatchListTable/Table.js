import React, { useState, useEffect, useCallback } from "react";
import { genreids } from "./helper";

const Table = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [genre, setGenre] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    setLoader(true);
    if (localStorage.getItem("movieWatchList")) {
      const movies = JSON.parse(localStorage.getItem("movieWatchList"));
      setFavouriteMovies(movies);
      setFilteredMovies(movies);
      const listOfGenre = new Set(
        movies.map((movie) => genreids[movie?.genre_ids[0]])
      );
      setGenre(() => ["All Genre", ...listOfGenre]);
    }
    setLoader(false);
  }, []);

  const deleteMovieHandler = useCallback(
    (movie) => {
      const filteredMovies = favouriteMovies?.filter((m) => m.id !== movie.id);
      setFavouriteMovies(filteredMovies);
      setFilteredMovies(filteredMovies);
      localStorage.setItem("movieWatchList", JSON.stringify(filteredMovies));
    },
    [favouriteMovies]
  );

  const currGenreHandler = useCallback(
    (genre) => {
      setCurrGenre(genre);
      let filteredMovies = [];
      if (genre === "All Genre") {
        filteredMovies = favouriteMovies;
      } else {
        filteredMovies = favouriteMovies.filter(
          (m) => genreids[m?.genre_ids[0]] === genre
        );
      }
      setFilteredMovies(filteredMovies);
    },
    [favouriteMovies]
  );

  const inputHandler = useCallback(
    (val) => {
      setSearchStr(val);
      if (val === "") {
        currGenreHandler(currGenre);
      } else {
        // to do handle genre and user search string usecase
        setFilteredMovies(
          filteredMovies.filter((m) =>
            m.title.toLowerCase().includes(val.toLowerCase())
          )
        );
      }
    },
    [filteredMovies, currGenre, currGenreHandler]
  );

  const sortHandler = useCallback(
    (order) => {
      let sortedData = [];
      if (order === "ascending") {
        sortedData = filteredMovies.sort((m1, m2) => {
          return m1?.vote_average - m2.vote_average;
        });
      } else {
        sortedData = filteredMovies.sort((m1, m2) => {
          return m2?.vote_average - m1.vote_average;
        });
      }
      setFilteredMovies([...sortedData]);
    },
    [filteredMovies]
  );

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="border border-gray-300 shadow-md m-5 rounded-md">
          <div className="my-6 flex flex-wrap space-x-2 justify-center">
            {genre?.length > 0 &&
              genre.map((eachGenre, idx) => {
                return (
                  <div
                    key={idx}
                    className={
                      currGenre === eachGenre
                        ? "m-2 text-lg p-1 bg-blue-400 text-white rounded-xl font-bold"
                        : "m-2 text-lg p-1 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
                    }
                    onClick={() => currGenreHandler(eachGenre)}
                  >
                    {eachGenre}
                  </div>
                );
              })}
          </div>
          <div className="text-center">
            <label for="title">Enter Title of Movie</label>
            <input
              type="text"
              id="title"
              className="bg-gray-200 border-4 text-center p-1 m-2"
              placeholder="search for the Movie"
              value={searchStr}
              onChange={(e) => inputHandler(e.target.value)}
            />
          </div>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
            <thead>
              <tr>
                <th className="p-2 m-4 text-gray-800">Name</th>
                <th className="p-2 m-4 text-gray-800 flex space-x-2">
                  <img
                    className="mr-1"
                    alt="ascending button"
                    onClick={() => sortHandler("ascending")}
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                  />
                  Rating
                  <img
                    className="ml-1"
                    alt="descending button"
                    onClick={() => sortHandler("desending")}
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                  />
                </th>
                <th className="p-2 m-4 text-gray-800">Popularity</th>
                <th className="p-2 m-4 text-gray-800">Release Date</th>
                <th className="p-2 m-4 text-gray-800">Genre</th>
                <th className="p-2 m-4 text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies?.length > 0 &&
                filteredMovies?.map((movie) => {
                  return (
                    <tr key={movie?.id}>
                      <td className="flex items-center space-x-2 px-5 py-6">
                        <img
                          src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`}
                          className="h-[10rem] w-[10rem]"
                          alt="Movie Poster"
                        />
                        <div>{movie?.title}</div>
                      </td>
                      <td>{movie?.vote_average}</td>
                      <td>{movie?.popularity}</td>
                      <td>{movie?.release_date}</td>
                      <td>{genreids[movie?.genre_ids[0]]}</td>
                      <td>
                        <button
                          className="text-red-600 border-2 border-black p-2"
                          onClick={() => {
                            deleteMovieHandler(movie);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;

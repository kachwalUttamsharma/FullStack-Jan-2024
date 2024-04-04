import React, { useEffect, useState, useCallback } from "react";
import { GetTrendingMovies } from "../../Service/GetTrendingMovies";
import Pagination from "../Pagination";
import "./Movies.css";
import MovieInfo from "./MovieInfo";

/**
 *
 * cache -> function, component, values
 * -> usecallback, React.memo(), useMemo
 */

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [watchList, setWatchList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const watchListFromLocalStorage = localStorage?.getItem("movieWatchList");
    setWatchList(JSON.parse(watchListFromLocalStorage));
  }, []);

  useEffect(() => {
    setLoader(true);
    GetTrendingMovies(page)
      .then((data) => {
        setMovies(data);
        setLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setLoader(false);
      });
  }, [page]);

  const handleOpenModal = useCallback((movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMovie(null);
    setOpenModal(false);
  }, []);

  const loadNextPageMovies = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const loadPreviousPageMovies = useCallback(() => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const toogleWatchlist = useCallback(
    (movie) => {
      const isMovieInWatchlist = watchList?.some(
        (item) => item.id === movie.id
      );
      if (isMovieInWatchlist) {
        setWatchList((prevMoviesList) => {
          const filteredMovies =
            prevMoviesList?.length > 0 &&
            prevMoviesList.filter((m) => m.id !== movie.id);
          localStorage.setItem(
            "movieWatchList",
            JSON.stringify(filteredMovies)
          );
          return filteredMovies;
        });
      } else {
        setWatchList((prevMoviesList) => {
          const newMoviesList =
            prevMoviesList?.length > 0 ? [...prevMoviesList, movie] : [movie];
          localStorage.setItem("movieWatchList", JSON.stringify(newMoviesList));
          return newMoviesList;
        });
      }
    },
    [watchList]
  );

  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="text-2xl mb-8 font-bold text-center pt-4 text-blue-400">
            Trending Movies
          </div>
          <div className="flex flex-wrap">
            {movies &&
              movies?.map((movie) => {
                const isInWatchlist = watchList?.some(
                  (item) => item.id === movie.id
                );
                return (
                  <div
                    key={movie?.id}
                    className="w-[220px] h-[23vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 relative"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,
                    }}
                    onClick={() => handleOpenModal(movie)}
                  >
                    <div className="absolute top-2 right-2 bg-gray-900 p-2 text-xl rounded-xl">
                      {!isInWatchlist ? (
                        <button
                          onClick={() => {
                            toogleWatchlist(movie);
                          }}
                        >
                          😍
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            toogleWatchlist(movie);
                          }}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                    <div className="text-white text-center font-bold bg-gray-900 w-full bg-opacity-50">
                      {movie?.title}
                    </div>
                  </div>
                );
              })}
          </div>
          <Pagination
            onNext={loadNextPageMovies}
            onPrev={loadPreviousPageMovies}
            currPage={page}
          />
          {openModal && selectedMovie && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex justify-center items-center h-screen">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[30vw]">
                <MovieInfo movie={selectedMovie} />
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;

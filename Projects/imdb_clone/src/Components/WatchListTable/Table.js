import React, { useState, useEffect } from "react";

const Table = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    if (localStorage.getItem("movieWatchList")) {
      setFavouriteMovies(JSON.parse(localStorage.getItem("movieWatchList")));
    }
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="border border-gray-300 shadow-md m-5 rounded-md">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
            <thead>
              <tr>
                <th className="p-2 m-4 text-gray-800">Name</th>
                <th className="p-2 m-4 text-gray-800">Rating</th>
                <th className="p-2 m-4 text-gray-800">Popularity</th>
                <th className="p-2 m-4 text-gray-800">Release Date</th>
              </tr>
            </thead>
            <tbody>
              {favouriteMovies?.length > 0 &&
                favouriteMovies?.map((movie, index) => {
                  return (
                    <tr key={index}>
                      <td className="flex items-center space-x-2 px-5 py-6">
                        <img
                          src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`}
                          className="h-[10rem] w-[10rem]"
                        />
                        <div>{movie?.title}</div>
                      </td>
                      <td>{movie?.vote_average}</td>
                      <td>{movie?.popularity}</td>
                      <td>{movie?.release_date}</td>
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

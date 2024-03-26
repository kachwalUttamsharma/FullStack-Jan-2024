import React from "react";

const Movies = () => {
  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>
      <div className="flex">
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 "
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`,
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 "
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Movies;

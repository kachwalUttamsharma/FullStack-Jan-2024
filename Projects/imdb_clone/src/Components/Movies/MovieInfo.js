import React from "react";

const MovieInfo = ({ movie }) => {
  const dummyTrailerUrl = "https://www.youtube.com/embed/aqa3YTtwvaU";

  const { title, overview, poster_path, release_date, vote_average } = movie;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <img
        className="w-full rounded-lg mb-4 h-[40vh]"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${title} Poster`}
      />
      <h2 className="text-2xl mb-8 font-bold text-center pt-4 text-blue-400">
        {title}
      </h2>
      <p className="text-gray-500">Release Date: {release_date}</p>
      <p className="text-gray-500">Average Vote: {vote_average}</p>
      <p>{overview}</p>
      <div className="mt-4">
        <h3 className="text-xl text-blue-400">Trailer</h3>
        <iframe
          title={title}
          width="100%"
          height="315"
          src={dummyTrailerUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieInfo;

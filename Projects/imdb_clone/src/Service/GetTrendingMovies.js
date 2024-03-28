import axios from "axios";

export const GetTrendingMovies = async (pageNo) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US", page: pageNo | 1 },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE5ZDk0YjA3MmI1YzQ5N2YzYTk3MjBhY2I4NmJjMiIsInN1YiI6IjY2MDU5ZDMwMzk1NDlhMDE0YTk1NzZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PEmyt0AgIhVP5Y7o7LtnbDTd1pKJPS-NANzNIZiMeis",
    },
  };
  const response = await axios.request(options);
  console.log(response);
  return response?.data?.results;
};

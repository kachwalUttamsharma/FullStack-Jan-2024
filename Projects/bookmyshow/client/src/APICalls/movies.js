import { axiosInstance } from ".";

export const GetAllMovies = async () => {
  try {
    const response = await axiosInstance.get(
      "/app/v1/users/admin/getAllMovies"
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const AddMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/app/v1/users/admin/addMovie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const DeleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.post(
      "/app/v1/users/admin/deleteMovie",
      { _id: movieId }
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const UpdateMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/app/v1/users/admin/updateMovie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/app/v1/users/admin/getMovieById/${id}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

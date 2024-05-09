import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    credentials: "include",
    method: "POST",
    "Content-Type": "application/json",
    Authorization: `bearer ${
      localStorage?.getItem("tokenForBookMyShow") || ""
    }`,
  },
});

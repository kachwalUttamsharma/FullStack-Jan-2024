import axios from "axios";

let response = {};
const axiosInstance = axios.create({
  headers: {
    credentials: "include",
    method: "POST",
    "Content-Type": "application/json",
  },
});

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/app/v1/users/register",
      payload
    );
    return response?.data;
  } catch (err) {
    return err?.response?.data || err;
  }
};

export const LoginUser = async (payload) => {
  try {
    response = await axiosInstance.post("/app/v1/users/login", payload);
    return response?.data;
  } catch (err) {
    return err?.response?.data || err;
  }
};

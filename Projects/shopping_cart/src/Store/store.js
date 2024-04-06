import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReduce,
  },
});

export default store;

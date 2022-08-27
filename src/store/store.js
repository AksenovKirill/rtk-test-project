import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice.js";
import todoSlice from "./slices/todoSlice.js";
import userSlice from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
});

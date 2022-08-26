import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice.js";
import userSlice from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});

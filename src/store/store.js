import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./slices/post/postSlice.js";
import todoSlice from "./slices/todo/todoSlice.js";
import userSlice from "./slices/user/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(url);
    dispatch(setPosts(res.data));
  }
);

export const deletePostByid = createAsyncThunk(
  "posts/deletePostById",
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log("getPosts: fullfield"),
    [getPosts.pending]: () => console.log("getPosts: pending"),
    [getPosts.rejected]: () => console.log("getPosts: rejected"),
    [deletePostByid.fulfilled]: () => console.log("deletePostByid: fullfield"),
    [deletePostByid.pending]: () => console.log("deletePostByid: pending"),
    [deletePostByid.rejected]: () => console.log("deletePostByid: rejected"),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;

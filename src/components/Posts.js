import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/post/postSlice";
import PostItem from "./PostItem";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const handleClick = () => {
    dispatch(getPosts());
  };
  return (
    <div>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
      >
        Get posts
      </button>
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

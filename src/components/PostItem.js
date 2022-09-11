import React from "react";
import { useDispatch } from "react-redux";
import { deletePostByid } from "../store/slices/post/postSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const handleDeletePost = () => {
    dispatch(deletePostByid(post.id));
  };
  return (
    <div
      onClick={handleDeletePost}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {post.title}
    </div>
  );
};

export default PostItem;

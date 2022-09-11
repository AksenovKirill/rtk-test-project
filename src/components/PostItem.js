import React from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { deletePostByid } from "../store/slices/post/postSlice";
const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(deletePostByid(post.id))}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {post.title}
    </div>
  );
};

=======
import { removePostById } from "../store/slices/postSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(removePostById(post.id))}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {post.title}
    </div>
  );
};

>>>>>>> 4588f9b3f4b577c343005c565a6f9c16ca4de721
export default PostItem;

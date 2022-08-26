import React, { useState } from "react";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      text: value,
      completed: false,
      id: v4(),
    };
    console.log(newTodo);
    dispatch(addTodo(newTodo));
    setValue("");
  };

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        value={value}
        type="text"
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={() => handleAddTodo()}
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

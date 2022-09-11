import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../store/slices/user/userSlice";
import FirstName from "./FirstName";
import LastName from "./LastName";

const User = () => {
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    dispatch(setFirstName(event.target.value));
  };

  const handleChangeLastName = (event) => {
    dispatch(setLastName(event.target.value));
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="First Name"
        className="w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        onChange={handleChangeFirstName}
      />
      <input
        type="text"
        placeholder="Second Name"
        className="w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        onChange={handleChangeLastName}
      />
      <div className="flex gap-20 py-5">
        <div className="flex flex-col">
          <div className="flex font-light">First Name:</div>
          <div className="flex">
            <FirstName />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex font-light">Last Name:</div>
          <div className="flex">
            <LastName />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

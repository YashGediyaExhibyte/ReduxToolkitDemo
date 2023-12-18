import React from "react";
import { FakeUserData } from "../api/GenarateUser";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearAllUser, deleteUser } from "../redux/slices/UserSlice";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const AddNewUser = (name) => {
    dispatch(addUser({ id: new Date().getTime().toString(), name }));
  };

  const handleRemove = (id) => {
    dispatch(deleteUser(id));
  };

  const handleDeleteAll = () => {
    dispatch(clearAllUser());
  };

  return (
    <div>
      <div className="p-10 text-center">
        <h2 className="opacity-30 text-slate-700 text-4xl font-bold">
          Todo list
        </h2>
        <div className="flex w-full max-w-[700px] items-center mt-10 justify-center mx-auto">
          <div className="w-full">
            <div className="flex items-center justify-between py-4 w-full border-b border-slate-200">
              <h3 className="text-slate-500 text-2xl font-semibold">
                List of user details
              </h3>
              <button
                onClick={() => AddNewUser(FakeUserData())}
                className="px-5 py-2 rounded-md text-white text-base font-medium bg-blue-400"
              >
                Add new user
              </button>
            </div>
            <ul className="py-5 w-[80%] mx-auto">
              {data.map((val, i) => (
                <li
                  className="flex px-5 justify-between items-center py-2 border-t border-slate-100"
                  key={i}
                >
                  <h3 className="text-slate-600 font-medium">{val?.name}</h3>
                  <button
                    onClick={() => handleRemove(val?.id)}
                    className="text-red-600 text-2xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-200 py-5 flex justify-end">
              <button
                onClick={() => handleDeleteAll()}
                className="px-5 py-2 rounded-md text-white text-base font-medium bg-red-400"
              >
                Clear all users
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <FakeUserData /> */}
    </div>
  );
};

export default TodoList;

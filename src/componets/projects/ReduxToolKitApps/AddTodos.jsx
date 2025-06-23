import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./fetures/todoSlice";

export const AddTodos = () => {
  const [todoInput, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(todoInput));
    setInput("");
  };
  return (
    <>
      {/* Create the AddTodo component */}
      <div className="input   p-[10px] flex h-[100%]  justify-center items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487874673-976050b1dcab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
        <form
          action=""
          onSubmit={addTodoHandler}
          className="flex h-[100%] w-[200px] flex-col justify-center items-center"
        >
          <h1 className="text-2xl font-bold text-center mb-[10px]">Add Todo</h1>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo"
            className="border-2 border-black-200 rounded w-full p-2"
          />
          <button
            type="submit"
            className="border-2 bg-black w-full text-white border-black mt-[10px] rounded"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

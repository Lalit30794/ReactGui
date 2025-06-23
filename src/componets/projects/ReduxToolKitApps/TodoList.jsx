import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "./fetures/todoSlice";
import { useState } from "react";

export const TodoList = () => {
  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodosHandler = (id) => {
    dispatch(removeTodos(id));
  };
  return (
    <>
      <div className="input  h-[100%] w-[70%]   flex justify-between items-center ">
        <ul className="flex h-[100%] w-[400px]  flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center">Todos List</h1>
          {todosList.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => removeTodosHandler(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

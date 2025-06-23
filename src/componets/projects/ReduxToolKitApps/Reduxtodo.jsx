import React from "react";
import { AddTodos } from "./AddTodos";
import { TodoList } from "./TodoList";

export const Reduxtodo = () => {
  return (
    <>
      {/* Fist step : We need to crate the two components */}
      <div className="w-[90%] h-[80vh]  bg-[#f5f5f5] rounded-xl mx-auto flex justify-between items-center gap-4">
        <AddTodos />
        <TodoList />
      </div>
    </>
  );
};

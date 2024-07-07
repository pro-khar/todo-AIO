import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
function Output() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <div className="border rounded-md h-1/3 w-1/2 p-5">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between">
          <p>{todo.title}</p>
          <p>{todo.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default Output;

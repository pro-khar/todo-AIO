import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { TrashIcon } from "@radix-ui/react-icons";
import { removeTodo } from "./Redux/todoSlice";
function Output() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <div className="border rounded-md h-1/3 w-1/2 p-5">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between">
          <p>{todo.title}</p>
          <p>{todo.gender}</p>
          <TrashIcon
            className=" text-red-500 w-5 h-5"
            onClick={(e) => dispatch(removeTodo(todo.id))}
          />
        </div>
      ))}
    </div>
  );
}

export default Output;

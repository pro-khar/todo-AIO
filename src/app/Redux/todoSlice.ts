import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: "1",
        title: "Learn React",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

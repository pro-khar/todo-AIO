import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, gender } = action.payload;
      const todo = {
        id: nanoid(),
        title,
        gender,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

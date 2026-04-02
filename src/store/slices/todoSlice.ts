import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../lib/type";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        content: string;
        status: "pending" | "completed";
      }>,
    ) => {
      const { id, title, content, status } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.title = title;
        todo.content = content;
        todo.status = status;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoProps } from "@/types";

interface TodoState {
  todoList: TodoProps[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add todo to list
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.todoList.push({ ...action.payload });
      // Save to localStorage only on client side
      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.todoList));
      }
    },
    // remove todo from list
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo._id !== action.payload,
      );
      // Save to localStorage only on client side
      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.todoList));
      }
    },

    // delete all todos
    deleteAllTodos: (state) => {
      state.todoList = [];
      // Save to localStorage only on client side
      if (typeof window !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.todoList));
      }
    },
    // Load todos from localStorage (call this from client-side)
    loadTodos: (state) => {
      if (typeof window !== "undefined") {
        try {
          const storedTodos = localStorage.getItem("todos");
          if (storedTodos) {
            state.todoList = JSON.parse(storedTodos);
          }
        } catch (error) {
          console.error("Error loading todos from localStorage:", error);
        }
      }
    },
  },
});

export const { addTodo, removeTodo, deleteAllTodos, loadTodos } =
  todoSlice.actions;
export default todoSlice.reducer;

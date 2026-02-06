"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { TodoProps } from "@/types";
import { useLoadTodos } from "@/hooks/useLoadTodos";

import TodoIitem from "./TodoIitem";
import DeleteAllButton from "./DeleteAllButton";

const TodoList = () => {
  useLoadTodos(); // Load todos from localStorage on client side
  const { todoList } = useSelector((state: RootState) => state.todo);
  return (
    <div className="flex flex-col gap-4 mt-2">
      {todoList?.length ? (
        todoList.map((item: TodoProps) => (
          <TodoIitem key={item._id} item={item} />
        ))
      ) : (
        <h1 className="p-2 border border-red-500 rounded-md font-bold text-red-500 text-center">
          Your todoList is Empty
        </h1>
      )}

      {todoList.length > 1 && <DeleteAllButton />}
    </div>
  );
};

export default TodoList;

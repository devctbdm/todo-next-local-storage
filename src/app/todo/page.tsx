"use client";
import Link from "next/link";
import { CornerLeftUp } from "lucide-react";
import TodoList from "@/components/custom/TodoList";

const TodoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3 flex items-center gap-2 border rounded-md">
        <div className="w-full flex-col gap-4 p-2 justify-center items-center">
          <Link href="/" className="hover:text-red-500 duration-200">
            <CornerLeftUp />
          </Link>

          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todo/todoSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo === "") {
      toast.error("Please write something");
      return;
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), title: todo, todo }));
      toast.success("Todo added successfully");
      setTodo("");
    }
  };

  return (
    <div>
      <div>
        {/* todo form  */}

        <form onSubmit={handleTodo} className="flex gap-2 ">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Add a todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="pr-7"
            />
            {todo && (
              <X
                onClick={() => setTodo("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5 hover:text-red-600 duration-200 transition-all"
              />
            )}
          </div>

          <Button
            variant={"secondary"}
            type="submit"
            className="cursor-pointer"
          >
            Add
          </Button>
        </form>
        {/* todo list  */}
      </div>
    </div>
  );
};

export default InputForm;

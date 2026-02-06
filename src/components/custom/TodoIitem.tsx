"use client";
import type { TodoItemsProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/store/todo/todoSlice";
import { toast } from "sonner";

const TodoIitem = ({ item }: TodoItemsProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 120 },
        }}
      >
        <div className="flex justify-between items-center p-2 rounded-md border">
          <p>{item.title}</p>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant={"destructive"}
              size={"icon"}
              className="cursor-pointer"
              onClick={() => {
                dispatch(removeTodo(item._id));
                toast.success("Todo deleted successfully");
              }}
            >
              <Trash />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TodoIitem;

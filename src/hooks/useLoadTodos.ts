"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "@/store/todo/todoSlice";

export const useLoadTodos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);
};

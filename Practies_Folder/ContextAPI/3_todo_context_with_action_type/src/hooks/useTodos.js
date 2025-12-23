import { useContext } from "react";
import { TodoContext } from "../context/todo/TodoContext";

export const useTodos = () => {
  return useContext(TodoContext);
};


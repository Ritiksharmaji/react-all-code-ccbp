import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <TodoContext.Provider value={{ state, dispatch, editTodo, setEditTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

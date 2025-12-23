import { createContext, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // Use useReducer to manage todos state with todoReducer where actions will be dispatched to update the state
  // Initial state is an empty array
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <TodoContext.Provider value={{ todos, dispatch, editTodo, setEditTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

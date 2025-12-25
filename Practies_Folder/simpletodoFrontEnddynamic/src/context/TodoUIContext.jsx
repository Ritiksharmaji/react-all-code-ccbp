import { createContext, useContext, useState } from "react";

const TodoUIContext = createContext();

export const TodoUIProvider = ({ children }) => {
  // Global UI state for Todo (e.g., currently edited todo) 
  const [editTodo, setEditTodo] = useState(null);

  return (
    <TodoUIContext.Provider value={{ editTodo, setEditTodo }}>
      {children}
    </TodoUIContext.Provider>
  );
};

export const useTodoUI = () => useContext(TodoUIContext);

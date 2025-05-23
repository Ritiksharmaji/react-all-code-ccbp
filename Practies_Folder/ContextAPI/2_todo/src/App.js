import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>📝 React Todo App (Context API)</h2>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

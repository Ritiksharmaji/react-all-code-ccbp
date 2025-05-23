import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {todos.length === 0 && <p style={{ textAlign: "center" }}>No todos yet.</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

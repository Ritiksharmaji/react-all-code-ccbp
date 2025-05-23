import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#aaa" : "#000",
      }}
    >
      <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={deleteStyle}>❌</button>
    </div>
  );
};

const deleteStyle = {
  background: "transparent",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
};

export default TodoItem;

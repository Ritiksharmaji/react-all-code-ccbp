import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />
      <button type="submit" style={buttonStyle}>Add</button>
    </form>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  cursor: "pointer",
};

export default TodoInput;

import React from "react";
import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Counter Value: {count}</h1>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={increment} style={buttonStyle}>Increment</button>
        <button onClick={decrement} style={buttonStyle}>Decrement</button>
        <button onClick={reset} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "0 10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Counter;

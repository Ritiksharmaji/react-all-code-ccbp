import React from "react";
import { CounterProvider } from "./context/CounterContext";
import Counter from "./components/Counter";

const App = () => {
  return (
    <CounterProvider>
      <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>React Counter App using Context API</h2>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;

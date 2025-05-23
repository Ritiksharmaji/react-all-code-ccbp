import { createContext, useContext, useState } from "react";

// Create the context
const CounterContext = createContext();

// Export custom hook for convenience
export const useCounter = () => useContext(CounterContext);

// Create provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

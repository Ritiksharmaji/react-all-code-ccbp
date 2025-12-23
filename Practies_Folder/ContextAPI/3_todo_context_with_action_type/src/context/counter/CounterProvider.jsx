import { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { counterReducer } from "./CounterReducer";

export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

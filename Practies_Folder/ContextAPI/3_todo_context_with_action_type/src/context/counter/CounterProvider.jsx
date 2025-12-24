import { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { counterReducer } from "./CounterReducer";

export const CounterProvider = ({ children }) => {
  // Initialize useReducer with counterReducer and initial state of 0 for count
  // here dispatch will be used to send actions to the reducer to update the count state
  // so we return both count and dispatch in the context value
  // can we chage the
  const [count, setCounter] = useReducer(counterReducer, 0);
  
  return (
    <CounterContext.Provider value={{ count, setCounter }}>
      {children}
    </CounterContext.Provider>
  );

  // const [count, dispatch] = useReducer(counterReducer, 0);

  // return (
  //   <CounterContext.Provider value={{ count, dispatch }}>
  //     {children}
  //   </CounterContext.Provider>
  // );
};

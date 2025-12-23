// import { createContext, useState } from "react";

// export const CounterContext = createContext();

// export const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <CounterContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// Level 3: Context + useReducer (Professional Way)
import { createContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";

export const CounterContext = createContext();

const initialState = { count: 0 };

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};


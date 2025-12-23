// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// export default function Counter() {
//   const { state, dispatch } = useContext(CounterContext);

//   return (
//     <div>
//       <h2>Count: {state.count}</h2>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// }

// Level 4: Custom Hook (Best Practice)
import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

// // Level 2: Counter Using Context API (Basic)
// import { useContext } from "react";
// import { CounterContext } from "./context/CounterContext";

// export default function App() {
//   const { count, increment, decrement } = useContext(CounterContext);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// //Level 3: Context + useReducer (Professional Way)
// import Counter from "./components/Counter";

// export default function App() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Counter />
//     </div>
//   );
// }

//Level 4: Custom Hook (Best Practice)



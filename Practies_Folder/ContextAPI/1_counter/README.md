Below is a **step-by-step Counter Application in React using Context API**, starting from **basic** to **advanced (with useReducer, custom hooks, async logic)**.
I’ll explain **why** and **when** each approach is used so it’s useful for real projects.

---

# 🔹 Level 1: Basic Counter (No Context)

This is just to understand the problem Context solves.

### `App.jsx`

```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```

❌ **Problem**:
If multiple components need `count`, you’ll face **prop drilling**.

---

# 🔹 Level 2: Counter Using Context API (Basic)

Now we introduce **Context API** to share state globally.

---

## 1️⃣ Create Counter Context

### `context/CounterContext.jsx`

```jsx
import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
```

---

## 2️⃣ Wrap App with Provider

### `main.jsx` or `index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
```

---

## 3️⃣ Consume Context

### `App.jsx`

```jsx
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

export default function App() {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

✅ **Now state is global**

---

# 🔹 Level 3: Context + useReducer (Professional Way)

Best practice for **complex state logic**.

---

## 1️⃣ Create Reducer

### `context/counterReducer.js`

```js
export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};
```

---

## 2️⃣ Context with Reducer

### `context/CounterContext.jsx`

```jsx
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
```

---

## 3️⃣ Use Reducer State

### `components/Counter.jsx`

```jsx
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
```

---

## 4️⃣ App.jsx

```jsx
import Counter from "./components/Counter";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Counter />
    </div>
  );
}
```

✅ **Redux-like structure without Redux**

---

# 🔹 Level 4: Custom Hook (Best Practice)

Avoid calling `useContext` everywhere.

---

### `hooks/useCounter.js`

```js
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  return useContext(CounterContext);
};
```

---

### Update Component

```jsx
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
```

---

# 🔹 Level 5: Advanced – Async Counter (Simulation)

### Reducer

```js
case "INCREMENT_ASYNC":
  return { count: state.count + action.payload };
```

### Dispatch Async Action

```jsx
const incrementAsync = () => {
  setTimeout(() => {
    dispatch({ type: "INCREMENT_ASYNC", payload: 5 });
  }, 1000);
};
```

---

# 🔹 Folder Structure (Recommended)

```
src/
 ├── context/
 │   ├── CounterContext.jsx
 │   ├── counterReducer.js
 ├── hooks/
 │   └── useCounter.js
 ├── components/
 │   └── Counter.jsx
 ├── App.jsx
 └── main.jsx
```

---

# 🔥 When to Use Context Counter Like This?

✔ Small to medium apps
✔ Global state (auth, theme, cart, counter)
✔ Avoid Redux for simple logic

❌ Not ideal for **very large apps with heavy async logic** → use Redux Toolkit

---

If you want next:

* 🔁 **Counter with Redux Toolkit**
* 📱 **Counter in React Native**
* 💾 **Persist counter using localStorage**
* 🎯 **Multiple counters with same context**

Just tell me 👍

Great question, Ritik 👍
Understanding **each concept/component and its role** is what separates a beginner from a **good React developer**.

Below is a **clear, layered explanation** of **all components, hooks, and files** we used — from **basic → advanced**, with **real-world roles**.

---

# 🟢 BASIC LEVEL COMPONENTS & CONCEPTS

---

## 1️⃣ **React Component**

### What it is

A **component** is a reusable UI block.

```jsx
function Counter() {
  return <h1>Hello</h1>;
}
```

### Role

* Builds UI
* Can be reused
* Can hold logic

📌 **Types**

* Functional Component (modern & recommended)
* Class Component (older)

---

## 2️⃣ **useState Hook**

### What it is

Used to **store and update local state**.

```jsx
const [count, setCount] = useState(0);
```

### Role

* Keeps data that changes
* Re-renders UI when data changes
* Component-level state only

📌 **Limitation**
Cannot easily share state between many components.

---

# 🟡 INTERMEDIATE LEVEL (CONTEXT API)

---

## 3️⃣ **createContext()**

### What it is

Creates a **global data container**.

```js
const CounterContext = createContext();
```

### Role

* Holds global state
* Avoids prop drilling
* Acts like a “data tunnel”

📌 **Real example**

* User authentication
* Theme (dark/light)
* Cart items

---

## 4️⃣ **Context Provider**

### What it is

A component that **provides data** to all children.

```jsx
<CounterContext.Provider value={{ count }}>
```

### Role

* Supplies global state
* Controls what data is shared
* Wraps application or part of it

📌 **Rule**
All components that need the data must be inside Provider.

---

## 5️⃣ **useContext Hook**

### What it is

Used to **consume context data**.

```js
const value = useContext(CounterContext);
```

### Role

* Reads shared state
* Avoids passing props manually
* Cleaner component code

📌 **Without useContext**
You’d need `<CounterContext.Consumer>` (old style).

---

# 🔵 ADVANCED STATE MANAGEMENT

---

## 6️⃣ **useReducer Hook**

### What it is

An advanced alternative to `useState` for complex logic.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Role

* Centralizes state logic
* Predictable state updates
* Similar to Redux

📌 **When to use**

* Multiple state changes
* Complex logic
* Action-based updates

---

## 7️⃣ **Reducer Function**

### What it is

A **pure function** that decides how state changes.

```js
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

### Role

* Defines state transitions
* Keeps logic separate from UI
* Improves readability & testing

📌 **Rules**

* Must be pure
* Must return new state
* No side effects

---

## 8️⃣ **dispatch() Function**

### What it is

A function that **sends actions** to reducer.

```js
dispatch({ type: "INCREMENT" });
```

### Role

* Triggers state updates
* Sends intent, not logic
* Keeps components clean

📌 Think of it as:

> “Hey reducer, do this action!”

---

## 9️⃣ **Action Object**

### What it is

A plain JavaScript object.

```js
{ type: "INCREMENT", payload: 5 }
```

### Role

* Describes **what happened**
* Carries data (payload)
* Enables predictable updates

---

# 🟣 BEST PRACTICES / PROFESSIONAL LEVEL

---

## 🔟 **Custom Hook (`useCounter`)**

### What it is

A reusable function that wraps logic.

```js
export const useCounter = () => {
  return useContext(CounterContext);
};
```

### Role

* Cleaner imports
* Encapsulation
* Easier refactoring

📌 **Industry standard**
You’ll see this in **Redux, Auth, Theme** logic.

---

## 1️⃣1️⃣ **Async Logic (setTimeout / API calls)**

### What it is

Simulating or handling asynchronous behavior.

```js
setTimeout(() => {
  dispatch({ type: "INCREMENT" });
}, 1000);
```

### Role

* Handle API responses
* Delayed updates
* Side effects

📌 **Rule**
Async logic should NOT be inside reducer.

---

# 🗂️ ARCHITECTURE FILE ROLES

---

## `CounterContext.jsx`

### Role

* Central global store
* Combines state + logic
* Exposes state & dispatch

---

## `counterReducer.js`

### Role

* Handles state transitions
* Single source of truth
* Easy testing

---

## `useCounter.js`

### Role

* Abstraction layer
* Cleaner components
* Reusability

---

## `Counter.jsx`

### Role

* UI layer
* Sends actions
* Reads state only

---

## `App.jsx`

### Role

* App layout
* Combines components

---

## `main.jsx`

### Role

* App entry point
* Wraps Provider
* Bootstraps React

---

# 🧠 SIMPLE MENTAL MODEL

| Part        | Responsibility     |
| ----------- | ------------------ |
| Component   | UI                 |
| Context     | Global data        |
| Provider    | Data supply        |
| useReducer  | State logic        |
| Reducer     | State change rules |
| Dispatch    | Trigger changes    |
| Custom Hook | Clean access       |
| Action      | Intent             |

---

# 🚀 Final Industry Tip

This **Context + Reducer** pattern is:

* ✔ Used in production
* ✔ Scales well
* ✔ Prepares you for Redux Toolkit

👉 Next best step for you:

* Convert this counter into **Auth Context**
* Add **localStorage persistence**
* Replace Context with **Redux Toolkit**

If you want, I can:

* Draw **architecture diagram**
* Compare **Context vs Redux Toolkit**
* Build **real auth system using this pattern**

Just tell me 💪

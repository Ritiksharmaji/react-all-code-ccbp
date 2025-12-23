Excellent question, Ritik 👌
This is **exactly the right way** to *feel* why **Context API exists** instead of just memorizing it.

Below I’ll show you **THE SAME TODO APP (with add, edit, delete, toggle)** in **two phases**:

1️⃣ **Component-based WITHOUT Context** → you will *feel the pain*
2️⃣ **Component-based WITH Context** → you will *see the benefit*

No shortcuts. Same UI. Same features.

---

# 🟥 PHASE 1: COMPONENT-BASED TODO **WITHOUT CONTEXT**

👉 *Prop Drilling Problem*

---

## 📁 Folder Structure (No Context)

```
src/
 ├── components/
 │   ├── TodoApp.jsx
 │   ├── TodoInput.jsx
 │   ├── TodoList.jsx
 │   └── TodoItem.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🔹 App.jsx (Root)

```jsx
import TodoApp from "./components/TodoApp";

export default function App() {
  return <TodoApp />;
}
```

---

## 🔹 TodoApp.jsx (STATE OWNER)

> ⚠️ All logic lives here
> This is where the problem starts

```jsx
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const updateTodo = (id, text) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <>
      <h1>Todo App (No Context)</h1>

      <TodoInput
        addTodo={addTodo}
        updateTodo={updateTodo}
        editTodo={editTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        setEditTodo={setEditTodo}
      />
    </>
  );
}
```

---

## 🔹 TodoInput.jsx

```jsx
import { useEffect, useState } from "react";

export default function TodoInput({ addTodo, updateTodo, editTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    editTodo
      ? updateTodo(editTodo.id, text)
      : addTodo(text);

    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submitHandler}>
        {editTodo ? "Update" : "Add"}
      </button>
    </>
  );
}
```

---

## 🔹 TodoList.jsx

```jsx
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  setEditTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          setEditTodo={setEditTodo}
        />
      ))}
    </ul>
  );
}
```

---

## 🔹 TodoItem.jsx

```jsx
export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  setEditTodo
}) {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => setEditTodo(todo)}>✏️</button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}
```

---

## ❌ WHAT PROBLEMS YOU SHOULD NOTICE

🔴 **Prop Drilling**

* `addTodo`, `deleteTodo`, `toggleTodo`, `setEditTodo`
* Passed through **multiple layers**

🔴 **Tight Coupling**

* Child components depend heavily on parent props

🔴 **Poor Scalability**

* Add a new feature → modify many files

🔴 **Hard to Maintain**

* One refactor breaks multiple components

---

# 🟢 PHASE 2: SAME COMPONENTS **WITH CONTEXT**

👉 *Clean, scalable, professional*

---

## 📁 Folder Structure (With Context)

```
src/
 ├── components/
 │   ├── TodoInput.jsx
 │   ├── TodoList.jsx
 │   └── TodoItem.jsx
 ├── context/
 │   ├── TodoContext.jsx
 │   └── todoReducer.js
 ├── hooks/
 │   └── useTodos.js
 ├── App.jsx
 └── main.jsx
```

---

## 🔹 todoReducer.js

```js
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];

    case "UPDATE":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};
```

---

## 🔹 TodoContext.jsx

```jsx
import { createContext, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <TodoContext.Provider value={{ todos, dispatch, editTodo, setEditTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
```

---

## 🔹 main.jsx

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
```

---

## 🔹 TodoInput.jsx (NO PROPS!)

```jsx
import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function TodoInput() {
  const { dispatch, editTodo, setEditTodo } = useTodos();
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch({ type: "UPDATE", payload: { id: editTodo.id, text } });
      setEditTodo(null);
    } else {
      dispatch({ type: "ADD", payload: text });
    }

    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submitHandler}>
        {editTodo ? "Update" : "Add"}
      </button>
    </>
  );
}
```

---

## 🔹 TodoList.jsx

```jsx
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

---

## 🔹 TodoItem.jsx

```jsx
import { useTodos } from "../hooks/useTodos";

export default function TodoItem({ todo }) {
  const { dispatch, setEditTodo } = useTodos();

  return (
    <li>
      <span
        onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => setEditTodo(todo)}>✏️</button>
      <button
        onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
      >
        ❌
      </button>
    </li>
  );
}
```

---

## 🧠 NOW YOU SHOULD **FEEL THE DIFFERENCE**

| Without Context  | With Context       |
| ---------------- | ------------------ |
| Props everywhere | Zero prop drilling |
| Tight coupling   | Loose coupling     |
| Hard to scale    | Easy to scale      |
| Logic scattered  | Centralized logic  |
| Hard refactor    | Safe refactor      |

---

## 🎯 FINAL REALIZATION (THIS IS KEY)

> Context is **NOT** for small apps
> Context is for **shared state across distant components**

You just experienced:

* ❌ Why props don’t scale
* ✅ Why context exists
* ✅ Why Redux becomes useful later

---

## 🚀 NEXT STEP (Strong Recommendation)

Since you already know **MERN & React**:

* Convert this Context Todo → **Redux Toolkit**
* Add **API integration**
* Add **Auth + Todo**

If you want, I can:

* Draw **data-flow diagram**
* Convert this to **TypeScript**
* Show **Redux Toolkit version**

Just tell me 🔥


## ---------- explain all hte componet which we have used here --------
Perfect 👍
You already have a **component-based Todo App without Context**.
Now I’ll **explain every component and concept used here**, from **basic → advanced**, and also **highlight the problem** that Context solves.

---

## 1️⃣ **TodoApp Component (Root / Container Component)**

```jsx
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
```

### 🔹 Role

* This is the **main parent component**
* Manages **global state** for the whole Todo App
* Controls **data flow** to child components

---

### 🔹 State Used

#### ✅ `todos`

```js
const [todos, setTodos] = useState([]);
```

* Stores **all todo items**
* Each todo object structure:

```js
{
  id: number,
  text: string,
  completed: boolean
}
```

📌 **Why here?**
Because both `TodoInput` and `TodoList` need access to todos.

---

#### ✅ `editTodo`

```js
const [editTodo, setEditTodo] = useState(null);
```

* Stores the todo currently being edited
* `null` → No todo is in edit mode
* Object → Edit mode active

📌 Used for **Edit functionality**

---

## 2️⃣ **Business Logic Functions (State Handlers)**

### ➕ `addTodo`

```js
const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text, completed: false }]);
};
```

#### 🔹 Role

* Adds a **new todo**
* Uses `Date.now()` for unique ID
* Sets `completed: false` by default

📌 **Basic React concept**: immutable state update

---

### ✏️ `updateTodo`

```js
const updateTodo = (id, text) => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    )
  );
  setEditTodo(null);
};
```

#### 🔹 Role

* Updates an existing todo’s text
* Resets edit mode after update

📌 **Advanced concept**:

* Conditional update inside `.map()`
* Avoids mutating state

---

### ❌ `deleteTodo`

```js
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};
```

#### 🔹 Role

* Removes a todo permanently

📌 Uses **filter** to create a new array

---

### ✅ `toggleTodo`

```js
const toggleTodo = (id) => {
  setTodos(
    todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};
```

#### 🔹 Role

* Marks todo as completed / uncompleted
* Implements checkbox behavior

📌 **Common real-world pattern**

---

## 3️⃣ **JSX Structure (UI Composition)**

```jsx
return (
  <>
    <h1>Todo App (No Context)</h1>

    <TodoInput
      addTodo={addTodo}
      updateTodo={updateTodo}
      editTodo={editTodo}
    />

    <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
      setEditTodo={setEditTodo}
    />
  </>
);
```

---

## 4️⃣ **TodoInput Component**

### 🔹 Props Received

| Prop         | Purpose              |
| ------------ | -------------------- |
| `addTodo`    | Add new todo         |
| `updateTodo` | Update existing todo |
| `editTodo`   | Know when editing    |

### 🔹 Responsibility

* Input field
* Add / Update button
* Decides **Add vs Edit mode**

📌 **Problem without Context**
Every function must be passed as props 👇
➡️ **Prop drilling starts**

---

## 5️⃣ **TodoList Component**

### 🔹 Props Received

| Prop          | Purpose          |
| ------------- | ---------------- |
| `todos`       | List of todos    |
| `deleteTodo`  | Delete todo      |
| `toggleTodo`  | Mark completed   |
| `setEditTodo` | Enable edit mode |

### 🔹 Responsibility

* Display list of todos
* Loop through todos
* Render child item components (if any)

📌 **UI-only component with logic dependency**

---

## 6️⃣ **Data Flow (Without Context)**

```
TodoApp
 ├── TodoInput
 │     ├── addTodo
 │     ├── updateTodo
 │     └── editTodo
 └── TodoList
       ├── todos
       ├── deleteTodo
       ├── toggleTodo
       └── setEditTodo
```

### ❌ Problem

* Too many props
* Hard to scale
* Deep nesting becomes messy

---

## 7️⃣ **Why Context is Needed (Key Realization)**

Without Context:

* State & functions live in parent
* Props passed manually to every child
* **Tight coupling**

With Context:

* State becomes **global**
* Components consume only what they need
* **Cleaner architecture**

---

## 8️⃣ **Concepts Covered (Interview Perspective)**

| Level        | Concepts                                   |
| ------------ | ------------------------------------------ |
| Basic        | `useState`, props, JSX                     |
| Intermediate | Immutable updates, lifting state           |
| Advanced     | State orchestration, prop drilling problem |
| Real-world   | Need for Context / Redux                   |

---

## 9️⃣ **Next Logical Step**

👉 Convert this to **Context-based Todo App**
👉 Then compare **Before vs After** clearly

If you want, next I can:

* ✅ Rewrite same app **with Context**
* ✅ Show **diagram-based comparison**
* ✅ Explain **when NOT to use Context**

Just tell me 👍

## ----------- explain all the component of conext with reducer which we have used ----------
Great question 🔥
Now we move to the **ADVANCED but MOST IMPORTANT part** of React:
👉 **Context + Reducer architecture**

I’ll explain **EVERY component + concept** that is used when we build a **Todo App using Context + useReducer**, from **basic → advanced**, **WHY it exists**, and **WHAT problem it solves**.

---

# 🧠 BIG PICTURE (Before Details)

When we use **Context + Reducer**, we split responsibilities:

| Layer      | Responsibility                   |
| ---------- | -------------------------------- |
| Context    | Share data globally              |
| Reducer    | Handle state logic               |
| Provider   | Inject state into component tree |
| Components | Only UI + dispatch actions       |

This gives **clean architecture**, **scalability**, and **Redux-like structure**.

---

# 1️⃣ **Context (`TodoContext`)**

```jsx
import { createContext } from "react";

export const TodoContext = createContext();
```

## 🔹 What is Context?

* A **global container** for data
* Allows any component to access state **without prop drilling**

### 🔹 Why we need it?

❌ Without Context → pass props manually
✅ With Context → direct access anywhere

### 🔹 Think of it as:

> “A global store holder”

---

# 2️⃣ **Reducer (`todoReducer`)**

```js
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "UPDATE_TODO":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};
```

## 🔹 What is a Reducer?

* A **pure function**
* Takes:

  * `state`
  * `action`
* Returns **new state**

📌 **No side effects**

---

### 🔹 Why reducer?

Without reducer:

* Logic scattered across components

With reducer:

* **Single source of truth for logic**
* Easy to debug & scale

---

### 🔹 Action Structure

```js
{
  type: "ADD_TODO",
  payload: data
}
```

| Field     | Purpose                |
| --------- | ---------------------- |
| `type`    | What action to perform |
| `payload` | Data needed            |

---

# 3️⃣ **TodoProvider (Context Provider)**

```jsx
import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
```

## 🔹 Role of Provider

* Wraps application
* Supplies:

  * `state`
  * `dispatch`

📌 **Everything inside Provider can access context**

---

### 🔹 Why `useReducer` here?

* Centralized logic
* Cleaner than multiple `useState`
* Similar to Redux store

---

### 🔹 Provider Flow

```
TodoProvider
   └── state
   └── dispatch
        ↓
   All child components
```

---

# 4️⃣ **useContext Hook**

```js
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const { state, dispatch } = useContext(TodoContext);
```

## 🔹 What does it do?

* Allows component to **consume context**

### 🔹 What it gives?

| Value      | Meaning                 |
| ---------- | ----------------------- |
| `state`    | Global todo list        |
| `dispatch` | Trigger reducer actions |

📌 Components no longer manage logic

---

# 5️⃣ **TodoInput Component (Consumer)**

```jsx
dispatch({
  type: "ADD_TODO",
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});
```

## 🔹 Role

* UI only
* Dispatches actions
* Does NOT modify state directly

### 🔹 Key Concept

> Components **REQUEST changes**, reducer **DECIDES how**

---

# 6️⃣ **TodoList Component (Consumer)**

```jsx
dispatch({ type: "DELETE_TODO", payload: id });
```

## 🔹 Role

* Reads todos from global state
* Triggers delete / toggle actions

📌 No props passed from parent!

---

# 7️⃣ **Action Types (Best Practice)**

```js
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
```

## 🔹 Why constants?

* Prevent typos
* Easier refactoring
* Industry standard

---

# 8️⃣ **State Flow (Context + Reducer)**

```
Component
   ↓ dispatch(action)
Reducer
   ↓ returns new state
Context Provider
   ↓ updates context
All consumers re-render
```

---

# 9️⃣ **Why This is BETTER than Context Alone**

| Context Only            | Context + Reducer   |
| ----------------------- | ------------------- |
| Logic in components     | Logic centralized   |
| Hard to test            | Easy to test        |
| Scattered state updates | Predictable updates |
| Poor scaling            | Scales well         |

---

# 🔟 Real-World Analogy

| React     | Real Life      |
| --------- | -------------- |
| Component | Employee       |
| Dispatch  | Request        |
| Reducer   | Manager        |
| State     | Company data   |
| Context   | Office network |

---

# 🔥 Interview One-Liner

> “Context provides global state, Reducer provides predictable state transitions.”

---

# 📌 When to use Context + Reducer?

✅ Medium–large apps
✅ Shared state
✅ Multiple components updating same data

❌ Simple local state
❌ Single component logic

---

If you want next:

* ✅ Full **file structure**
* ✅ Compare with **Redux Toolkit**
* ✅ Add **localStorage persistence**
* ✅ Performance optimization (`useMemo`, `useCallback`)

Just tell me 🚀

```
import { useContext } from "react"; import { TodoContext } from "./TodoContext"; const { state, dispatch } = useContext(TodoContext); 
exaplin more about in details
```
Excellent 👌
This line is **THE HEART of Context + Reducer**.
Let’s go **very deep**, step-by-step, from **basic → internal working → real-world analogy → common mistakes**.

---

## 📌 The Code in Question

```js
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const { state, dispatch } = useContext(TodoContext);
```

---

# 1️⃣ `useContext` – What exactly is it?

### 🔹 Definition

`useContext` is a **React Hook** that allows a component to **read and subscribe to a context value**.

```js
const value = useContext(SomeContext);
```

### 🔹 What does it return?

👉 Whatever is passed to the **Provider’s `value` prop**.

---

# 2️⃣ What is `TodoContext` here?

```js
export const TodoContext = createContext();
```

Think of `TodoContext` as:

> 📦 A **box** where shared data will be stored.

It does **nothing by itself** until a **Provider** supplies data.

---

# 3️⃣ Where do `state` and `dispatch` come from?

### 🔹 In `TodoProvider`

```jsx
<TodoContext.Provider value={{ state, dispatch }}>
  {children}
</TodoContext.Provider>
```

📌 This means:

* Context holds an **object**
* That object has:

  * `state`
  * `dispatch`

---

# 4️⃣ Breaking Down This Line

```js
const { state, dispatch } = useContext(TodoContext);
```

### Step-by-step execution:

#### Step 1

React looks for the **nearest TodoContext.Provider** above this component.

#### Step 2

It reads the `value` from that Provider.

```js
value = {
  state: [...todos],
  dispatch: function
}
```

#### Step 3

Destructuring happens:

```js
const state = value.state;
const dispatch = value.dispatch;
```

---

# 5️⃣ What is `state`?

### 🔹 `state`

* Comes from `useReducer`
* Contains **global todo list**

Example:

```js
state = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Context", completed: true }
];
```

📌 **READ-ONLY**

> You NEVER modify state directly.

---

# 6️⃣ What is `dispatch`?

### 🔹 `dispatch`

* A function provided by `useReducer`
* Used to **send actions to reducer**

```js
dispatch({ type: "DELETE_TODO", payload: id });
```

📌 Think of `dispatch` as:

> 📢 “Send a message to reducer”

---

# 7️⃣ Why is this powerful?

Without this line:

* Components need props
* Parent manages everything

With this line:

* Component becomes **independent**
* Can:

  * Read global state
  * Update global state

---

# 8️⃣ What happens when `dispatch` is called?

### Full flow:

```
dispatch(action)
   ↓
Reducer receives (state, action)
   ↓
Reducer returns new state
   ↓
Context Provider updates value
   ↓
All subscribed components re-render
```

---

# 9️⃣ Real-World Analogy 🏢

| React Concept | Real World          |
| ------------- | ------------------- |
| Context       | Office notice board |
| Provider      | Office admin        |
| state         | Company data        |
| dispatch      | Request form        |
| reducer       | Manager             |
| component     | Employee            |

Employee (component) does:

```js
dispatch({ type: "LEAVE_REQUEST" })
```

Manager (reducer) decides:

* Approve
* Reject

---

# 🔟 Why destructuring is used?

Instead of:

```js
const value = useContext(TodoContext);
value.state;
value.dispatch;
```

We do:

```js
const { state, dispatch } = useContext(TodoContext);
```

✔ Cleaner
✔ Readable
✔ Standard practice

---

# 1️⃣1️⃣ What if Provider is missing?

❌ This causes **runtime error**

```txt
Cannot destructure property 'state' of undefined
```

Because:

* `useContext` returns `undefined`
* No Provider above

📌 **Rule**

> A component using `useContext` MUST be wrapped in Provider

---

# 1️⃣2️⃣ Common Beginner Mistakes

### ❌ Using useContext outside Provider

```jsx
<TodoApp />
```

✅ Correct:

```jsx
<TodoProvider>
  <TodoApp />
</TodoProvider>
```

---

### ❌ Mutating state directly

```js
state.push(todo); ❌
```

✅ Always dispatch

```js
dispatch({ type: "ADD_TODO", payload: todo });
```

---

### ❌ Putting business logic in component

Bad:

```js
setTodos(...)
```

Good:

```js
dispatch(...)
```

---

# 1️⃣3️⃣ Advanced Tip: Custom Hook

Instead of repeating this everywhere 👇

```js
const { state, dispatch } = useContext(TodoContext);
```

Create:

```js
export const useTodo = () => {
  return useContext(TodoContext);
};
```

Then use:

```js
const { state, dispatch } = useTodo();
```

✔ Cleaner
✔ Scalable
✔ Industry best practice

---

# 1️⃣4️⃣ Interview-Level Explanation

> “`useContext(TodoContext)` allows components to subscribe to the global state provided by `TodoProvider`, giving direct access to state and dispatch without prop drilling.”

---

# ✅ Summary

| Item          | Role                      |
| ------------- | ------------------------- |
| `useContext`  | Reads context             |
| `TodoContext` | Global store              |
| `state`       | Shared data               |
| `dispatch`    | State update trigger      |
| Reducer       | Decides how state changes |

---

If you want next:

* 🔥 Build **custom `useTodo` hook**
* 🔥 Compare **Context vs Redux**
* 🔥 Add **middleware-like logging**
* 🔥 Optimize renders

Just say the word 😄

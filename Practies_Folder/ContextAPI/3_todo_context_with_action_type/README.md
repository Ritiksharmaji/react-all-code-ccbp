Perfect 👍
Now I’ll give you a **COMPLETE TODO EXAMPLE** using the **exact pattern you asked about**:

✔ `actionTypes.js`
✔ `actions.js`
✔ `todoReducer.js`
✔ Context + Provider
✔ Custom hook
✔ Components using `dispatch(actionCreator())`

This is **production-ready** and **interview-level**.

---

# ✅ FINAL TODO APP (Context + Reducer + Actions)

---

## 📁 Folder Structure (Quick Recap)

```txt
src/
├── context/
│   └── todo/
│       ├── TodoContext.jsx
│       ├── TodoProvider.jsx
│       ├── todoReducer.js
│       ├── actionTypes.js
│       └── actions.js
│
├── hooks/
│   └── useTodos.js
│
├── components/
│   └── todo/
│       ├── TodoApp.jsx
│       ├── TodoInput.jsx
│       ├── TodoList.jsx
│       └── TodoItem.jsx
│
├── App.jsx
```

---

## 1️⃣ `actionTypes.js`

👉 **Only constants**

```js
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
```

---

## 2️⃣ `actions.js`

👉 **Action creators (WHAT happened)**

```js
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
```

---

## 3️⃣ `todoReducer.js`

👉 **State logic (HOW state changes)**

```js
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actionTypes";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case TOGGLE_TODO:
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

## 4️⃣ `TodoContext.jsx`

👉 **Global store container**

```js
import { createContext } from "react";

export const TodoContext = createContext();
```

---

## 5️⃣ `TodoProvider.jsx`

👉 **Provides state + dispatch**

```js
import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <TodoContext.Provider value={{ state, dispatch, editTodo, setEditTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
```

---

## 6️⃣ `useTodos.js`

👉 **Custom hook (clean access)**

```js
import { useContext } from "react";
import { TodoContext } from "../context/todo/TodoContext";

export const useTodos = () => {
  return useContext(TodoContext);
};
```

---

## 7️⃣ `TodoApp.jsx`

👉 **UI container**

```js
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </>
  );
}
```

---

## 8️⃣ `TodoInput.jsx`

👉 **Add / Update todos**

```js
import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { addTodo, updateTodo } from "../../context/todo/actions";

export default function TodoInput() {
  const { dispatch, editTodo, setEditTodo } = useTodos();
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch(updateTodo(editTodo.id, text));
      setEditTodo(null);
    } else {
      dispatch(addTodo(text));
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

## 9️⃣ `TodoList.jsx`

👉 **Loop todos**

```js
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useTodos();

  return (
    <ul>
      {state.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

---

## 🔟 `TodoItem.jsx`

👉 **Single todo item**

```js
import { useTodos } from "../../hooks/useTodos";
import { deleteTodo, toggleTodo } from "../../context/todo/actions";

export default function TodoItem({ todo }) {
  const { dispatch, setEditTodo } = useTodos();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => setEditTodo(todo)}>✏️</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </li>
  );
}
```

---

## 1️⃣1️⃣ `App.jsx`

👉 **Wrap with Provider**

```js
import { TodoProvider } from "./context/todo/TodoProvider";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
```

---

# 🔥 WHY THIS EXAMPLE IS IMPORTANT

✔ Clear separation of concerns
✔ No prop drilling
✔ Reducer logic centralized
✔ Action creators reusable
✔ Easy Redux migration

---

## 🎯 Interview-Level Final Line

> “This Todo app uses Context for global state sharing, Reducer for predictable state updates, and action creators to standardize dispatched actions.”

---

If you want next:

* 🔥 Convert this to **Redux Toolkit**
* 🔥 Add **localStorage persistence**
* 🔥 Add **async API calls**
* 🔥 Add **unit tests for reducer**

Just tell me 🚀

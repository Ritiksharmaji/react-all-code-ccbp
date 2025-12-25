### What is **Redux**?

**Redux** is a **state management library** mainly used with **React** (but it can work with any JS framework).
It helps you **manage and centralize application state** so that data flow becomes **predictable, consistent, and easy to debug**, especially in **large applications**.

In simple words:
👉 Redux stores your app’s data in **one global place (store)** instead of passing props deeply between components.

---

## Why Redux is Needed?

* Avoid **prop drilling**
* Centralized state management
* Easier debugging (time-travel debugging)
* Predictable state updates
* Better structure for large apps

---

## Core Principles of Redux

1. **Single Source of Truth** → One global store
2. **State is Read-Only** → State can only be changed via actions
3. **Changes are Made with Pure Functions** → Reducers

---

## Basic Components of Redux

### 1️⃣ **Store**

The **store** holds the entire state of your application.

```js
const store = createStore(reducer);
```

✔ Only **one store** per app
✔ Created using reducers

---

### 2️⃣ **State**

State is the **data** stored inside Redux.

```js
{
  user: {},
  cart: [],
  theme: "dark"
}
```

✔ Read-only
✔ Cannot be modified directly

---

### 3️⃣ **Action**

An **action** is a **plain JavaScript object** that describes **what happened**.

```js
{
  type: "ADD_TODO",
  payload: "Learn Redux"
}
```

✔ Must have a **type**
✔ Can carry data using **payload**

---

### 4️⃣ **Reducer**

A **reducer** is a **pure function** that decides **how state changes** based on an action.

```js
const todoReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
```

✔ Takes **state + action**
✔ Returns **new state**
✔ Never mutates existing state

---

### 5️⃣ **Dispatch**

`dispatch()` sends an action to the store.

```js
store.dispatch({
  type: "ADD_TODO",
  payload: "Learn Redux"
});
```

---

### 6️⃣ **Selector**

Used to **read data from the store**.

```js
const todos = useSelector(state => state.todos);
```

---

## Redux Flow (Important)

```
UI → dispatch(action) → reducer → store → UI updates
```

---

## Redux with React (Basic Keys / APIs)

| Key                 | Purpose                      |
| ------------------- | ---------------------------- |
| `Provider`          | Makes store available to app |
| `useDispatch()`     | Dispatch actions             |
| `useSelector()`     | Read state                   |
| `createStore()`     | Create Redux store           |
| `combineReducers()` | Combine multiple reducers    |

---

### Example: Redux with React

#### Store Setup

```js
import { createStore } from "redux";

const store = createStore(todoReducer);
```

#### Provider

```js
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>
```

#### Using Redux in Component

```js
const dispatch = useDispatch();
dispatch({ type: "ADD_TODO", payload: "Redux Basics" });

const todos = useSelector(state => state.todos);
```

---

## Redux Toolkit (Modern Redux – Recommended ✅)

Redux Toolkit simplifies Redux setup.

### Key APIs

* `configureStore`
* `createSlice`
* `createAsyncThunk`

### Example

```js
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;
```

---

## When to Use Redux?

✔ Medium to large apps
✔ Shared state across many components
✔ Complex state logic
❌ Small apps → React Context is enough

---

### Summary

| Concept  | Meaning              |
| -------- | -------------------- |
| Redux    | Global state manager |
| Store    | Holds state          |
| Action   | What happened        |
| Reducer  | How state changes    |
| Dispatch | Send action          |
| Selector | Read state           |

---

If you want, I can also explain:

* Redux **with real project example**
* Redux Toolkit **step-by-step**
* Redux vs Context API
* Redux **interview questions**

Just tell me 👍

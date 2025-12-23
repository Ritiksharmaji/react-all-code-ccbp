Absolutely, Ritik 👍
Here are **clean, structured NOTES on React Context — from BASIC → ADVANCED**, written in a way that is **easy to revise**, **interview-ready**, and **real-project oriented**.

---

# 📘 REACT CONTEXT – COMPLETE NOTES (Basic → Advanced)

---

## 1️⃣ What is React Context? (BASIC)

### 🔹 Definition

**React Context** is a way to **share data globally** between components **without passing props manually at every level**.

> Context solves the **prop drilling problem**.

---

### 🔹 Problem: Prop Drilling

```jsx
App
 └── Parent
      └── Child
           └── GrandChild (needs data)
```

Without Context:

```jsx
<App data={data}>
  <Parent data={data}>
    <Child data={data}>
      <GrandChild data={data} />
    </Child>
  </Parent>
</App>
```

❌ Messy
❌ Hard to maintain

---

### 🔹 Solution: Context

```jsx
<Context.Provider value={data}>
  <App />
</Context.Provider>
```

Now any component can access `data` directly.

---

## 2️⃣ Core Concepts of Context

| Term                    | Meaning           |
| ----------------------- | ----------------- |
| `createContext()`       | Creates a context |
| `Provider`              | Supplies data     |
| `Consumer / useContext` | Reads data        |

---

## 3️⃣ Creating Context (BASIC)

```js
import { createContext } from "react";

export const MyContext = createContext();
```

📌 Creates a **global container**

---

## 4️⃣ Provider (VERY IMPORTANT)

```jsx
<MyContext.Provider value={someData}>
  {children}
</MyContext.Provider>
```

### 🔹 What Provider Does

* Injects data into component tree
* Only components **inside Provider** can access context

---

## 5️⃣ Consuming Context (useContext)

```js
import { useContext } from "react";
import { MyContext } from "./MyContext";

const value = useContext(MyContext);
```

### 🔹 What happens internally?

1. React finds nearest Provider
2. Reads its `value`
3. Subscribes component to updates

---

## 6️⃣ When to Use Context?

✅ Auth (user, token)
✅ Theme (dark/light)
✅ Language
✅ Cart / Todo
❌ Local component state

---

## 7️⃣ Simple Context with useState (INTERMEDIATE)

### Example: Auth Context

```jsx
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
```

✔ Easy
✔ Clean
✔ Best for small state

---

## 8️⃣ Why NOT Always Use Context?

❌ Re-renders many components
❌ Hard to debug when large
❌ Not optimized for frequent updates

---

## 9️⃣ Context + useReducer (ADVANCED)

### When state logic becomes complex:

* Many actions
* Multiple updates
* Shared business rules

---

### Reducer Basics

```js
const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
```

📌 Reducer is:

* Pure function
* Predictable
* Centralized logic

---

### Using Reducer in Context

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

<MyContext.Provider value={{ state, dispatch }}>
```

Now components **dispatch actions** instead of mutating state.

---

## 🔄 Context + Reducer Flow

```
Component
  ↓ dispatch(action)
Reducer
  ↓ new state
Provider
  ↓ updates context
All consumers re-render
```

---

## 1️⃣0️⃣ Action Object

```js
dispatch({
  type: "DELETE_TODO",
  payload: id
});
```

| Field     | Role        |
| --------- | ----------- |
| `type`    | Action name |
| `payload` | Data        |

---

## 1️⃣1️⃣ Why Context + Reducer is Powerful?

| Without Reducer     | With Reducer      |
| ------------------- | ----------------- |
| Logic in components | Logic centralized |
| Hard to scale       | Scalable          |
| Messy updates       | Predictable       |

---

## 1️⃣2️⃣ Custom Hook (BEST PRACTICE)

Instead of repeating:

```js
useContext(MyContext);
```

Create:

```js
export const useMyContext = () => {
  return useContext(MyContext);
};
```

✔ Cleaner
✔ Reusable
✔ Industry standard

---

## 1️⃣3️⃣ Side Effects in Context

Use `useEffect` for:

* localStorage
* API calls
* syncing data

```js
useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user));
}, [user]);
```

---

## 1️⃣4️⃣ Performance Optimization (ADVANCED)

### 🔹 Problem

Context causes **all consumers to re-render**.

### 🔹 Solutions

* Split contexts
* Memoize values

```js
const value = useMemo(() => ({ state, dispatch }), [state]);
```

---

## 1️⃣5️⃣ Multiple Contexts

```jsx
<AuthProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</AuthProvider>
```

✔ Clean separation
✔ Scalable architecture

---

## 1️⃣6️⃣ Context vs Redux

| Context     | Redux            |
| ----------- | ---------------- |
| Built-in    | External library |
| Simple      | Powerful         |
| Medium apps | Large apps       |

📌 Context + Reducer ≈ Redux (basic)

---

## 1️⃣7️⃣ Common Mistakes 🚨

❌ Using context everywhere
❌ Mutating state
❌ Not wrapping Provider
❌ Huge single context

---

## 1️⃣8️⃣ Interview One-Liners 🎯

* **Context** avoids prop drilling
* **Reducer** handles state transitions
* **useContext** subscribes to context
* **Provider** supplies global state

---

## 1️⃣9️⃣ When NOT to use Context

❌ Highly frequent updates
❌ Large deeply nested changing data
❌ Performance-critical apps

---

## 2️⃣0️⃣ Final Summary

| Level        | Concept                      |
| ------------ | ---------------------------- |
| Basic        | createContext, Provider      |
| Intermediate | useContext, useState         |
| Advanced     | useReducer, custom hooks     |
| Expert       | Optimization, split contexts |

---

## 🧠 One Final Line (Memorable)

> **Context shares state, Reducer controls logic, Components stay clean.**

---

If you want:

* 📄 **Printable PDF notes**
* 🔥 **Redux Toolkit comparison**
* 🧪 **Mini interview questions**
* 🏗 **Real project architecture**

Just say 👍

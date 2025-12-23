// import { useState } from "react";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [editTodo, setEditTodo] = useState(null);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   };

//   const updateTodo = (id, text) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, text } : todo
//       )
//     );
//     setEditTodo(null);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   return (
//     <>
//       <h1>Todo App (No Context)</h1>

//       <TodoInput
//         addTodo={addTodo}
//         updateTodo={updateTodo}
//         editTodo={editTodo}
//       />

//       <TodoList
//         todos={todos}
//         deleteTodo={deleteTodo}
//         toggleTodo={toggleTodo}
//         setEditTodo={setEditTodo}
//       />
//     </>
//   );
// }

// with useContext and useTodos hook
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <>
      <h1>Todo App (With Context + Reducer)</h1>
      <TodoInput />
      <TodoList />
    </>
  );
}


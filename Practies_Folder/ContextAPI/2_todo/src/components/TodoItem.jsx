// export default function TodoItem({
//   todo,
//   deleteTodo,
//   toggleTodo,
//   setEditTodo
// }) {
//   return (
//     <li>
//       <span
//         onClick={() => toggleTodo(todo.id)}
//         style={{
//           textDecoration: todo.completed ? "line-through" : "none"
//         }}
//       >
//         {todo.text}
//       </span>

//       <button onClick={() => setEditTodo(todo)}>✏️</button>
//       <button onClick={() => deleteTodo(todo.id)}>❌</button>
//     </li>
//   );
// }

// with useContext and useTodos hook
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

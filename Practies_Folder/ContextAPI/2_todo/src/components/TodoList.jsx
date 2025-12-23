// import TodoItem from "./TodoItem";

// export default function TodoList({
//   todos,
//   deleteTodo,
//   toggleTodo,
//   setEditTodo
// }) {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           deleteTodo={deleteTodo}
//           toggleTodo={toggleTodo}
//           setEditTodo={setEditTodo}
//         />
//       ))}
//     </ul>
//   );
// }

// with useContext and useTodos hook
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

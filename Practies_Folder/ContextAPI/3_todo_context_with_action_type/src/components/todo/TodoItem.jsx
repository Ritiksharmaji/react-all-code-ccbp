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

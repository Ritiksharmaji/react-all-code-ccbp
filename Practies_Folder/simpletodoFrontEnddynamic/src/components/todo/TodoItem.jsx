import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/slices/todoSlice";
import { useTodoUI } from "../../context/TodoUIContext";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { setEditTodo } = useTodoUI();

  return (
    <li>
      <span
        onClick={() =>
          dispatch(updateTodo({
            id: todo._id,
            data: { completed: !todo.completed }
          }))
        }
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => setEditTodo(todo)}>✏️</button>
      <button onClick={() => dispatch(deleteTodo(todo._id))}>❌</button>
    </li>
  );
}

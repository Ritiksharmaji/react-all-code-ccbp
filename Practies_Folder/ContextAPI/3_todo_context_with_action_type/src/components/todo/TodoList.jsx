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

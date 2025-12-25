import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";

export default function TodoPage() {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h1>Todo CRUD App</h1>

      {/* Local state → inside TodoInput (useState) */}
      <TodoInput />

      {/* Global state → Redux Toolkit */}
      <TodoList />
    </div>
  );
}

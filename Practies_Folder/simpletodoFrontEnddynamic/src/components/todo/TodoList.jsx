import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/slices/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(s => s.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {list.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

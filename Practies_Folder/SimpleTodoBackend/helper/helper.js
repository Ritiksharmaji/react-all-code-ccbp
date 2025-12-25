export const formatTodo = (todo) => ({
  id: todo._id,
  text: todo.text,
  completed: todo.completed,
  user: todo.user,
});

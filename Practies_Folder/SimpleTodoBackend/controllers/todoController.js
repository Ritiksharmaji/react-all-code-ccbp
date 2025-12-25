import { formatTodo } from "../helper/helper.js";
import Todo from "../models/Todo.js";

// // CREATE
// export const createTodo = async (req, res) => {
//   const todo = await Todo.create(req.body);
//   res.status(201).json(todo);
// };

// // READ
// export const getTodos = async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// };

// // UPDATE
// export const updateTodo = async (req, res) => {
//   const updated = await Todo.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(updated);
// };

// // DELETE
// export const deleteTodo = async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Todo deleted" });
// };

export const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(formatTodo(todo));
};
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos.map(formatTodo));
};


export const updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updated) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(formatTodo(updated));
};

export const deleteTodo = async (req, res) => {
  const deleted = await Todo.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ id: req.params.id });
};

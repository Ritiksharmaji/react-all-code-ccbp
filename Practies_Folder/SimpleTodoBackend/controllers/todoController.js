// import Todo from "../models/Todo.js";

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


import { formatTodo } from "../helper/helper.js";
import Todo from "../models/Todo.js";

// export const getTodos = async (req, res) => {
//   const todos = await Todo.find({ user: req.user });
//   res.json(todos);
// };

// export const addTodo = async (req, res) => {
//   const todo = await Todo.create({
//     text: req.body.text,
//     completed: false,
//     user: req.user,
//   });
//   res.json(todo);
// };

// export const updateTodo = async (req, res) => {
//   const todo = await Todo.findOneAndUpdate(
//     { _id: req.params.id, user: req.user },
//     { text: req.body.text },
//     { new: true }
//   );
//   res.json(todo);
// };

// export const deleteTodo = async (req, res) => {
//   await Todo.findOneAndDelete({ _id: req.params.id, user: req.user });
//   res.json({ message: "Deleted" });
// };

// for convet _id to id 
export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user });

  res.json(todos.map(formatTodo));
};

export const addTodo = async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    completed: false,
    user: req.user,
  });

  res.json(formatTodo(todo));
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    { text: req.body.text },
    { new: true }
  );

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(formatTodo(todo));
};

export const deleteTodo = async (req, res) => {
  console.log("Deleting todo with id:", req.params.id);
  await Todo.findOneAndDelete({ _id: req.params.id, user: req.user });

  res.json({ id: req.params.id });
};

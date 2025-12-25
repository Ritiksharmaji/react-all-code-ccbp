import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todo", createTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;

import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

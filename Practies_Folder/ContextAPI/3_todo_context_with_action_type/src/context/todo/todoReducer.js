import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actionTypes";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];

    case "UPDATE":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

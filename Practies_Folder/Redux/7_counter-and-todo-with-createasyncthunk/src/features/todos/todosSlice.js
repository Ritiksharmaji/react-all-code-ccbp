import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate fetching todos from an API
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve([
        { id: 1, text: 'Learn Redux Toolkit', completed: false },
        { id: 2, text: 'Build a todo app', completed: false },
      ]), 1000)
    );
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

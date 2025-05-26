import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate async fetch
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = [
    { id: 1, text: 'Learn Redux Toolkit', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(todos), 1000);
  });
});

// Simulate async add
export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (text) => {
  const newTodo = { id: Date.now(), text, completed: false };
  return new Promise((resolve) => {
    setTimeout(() => resolve(newTodo), 500);
  });
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch todos';
      })

      // addTodoAsync
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/todoService";

/* ASYNC THUNKS */
export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async () => (await api.fetchTodosApi()).data
);

export const addTodo = createAsyncThunk(
  "todos/add",
  async (todo) => (await api.addTodoApi(todo)).data
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({ id, data }) =>
    (await api.updateTodoApi(id, data)).data
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id) => {
    await api.deleteTodoApi(id);
    return id;
  }
);

const todoSlice = createSlice(
  {
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {

    builder
      .addCase(fetchTodos.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      })
      .addCase(fetchTodos.rejected, (s, a) => {
        s.loading = false;
        s.error = a.error.message;
      })

      .addCase(addTodo.fulfilled, (s, a) => {
        s.list.push(a.payload);
      })

      .addCase(updateTodo.fulfilled, (s, a) => {
        const i = s.list.findIndex(t => t._id === a.payload._id);
        if (i !== -1) s.list[i] = a.payload;
      })

      .addCase(deleteTodo.fulfilled, (s, a) => {
        s.list = s.list.filter(t => t._id !== a.payload);
      });
      
  }
});

export default todoSlice.reducer;

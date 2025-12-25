// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../services/todoService";

// /* ASYNC THUNKS */
// export const fetchTodos = createAsyncThunk(
//   "todos/fetch",
//   async () => (await api.fetchTodosApi()).data
// );

// export const addTodo = createAsyncThunk(
//   "todos/add",
//   async (todo) => (await api.addTodoApi(todo)).data
// );

// export const updateTodo = createAsyncThunk(
//   "todos/update",
//   async ({ id, data }) =>
//     (await api.updateTodoApi(id, data)).data
// );

// export const deleteTodo = createAsyncThunk(
//   "todos/delete",
//   async (id) => {
//     await api.deleteTodoApi(id);
//     return id;
//   }
// );

// const todoSlice = createSlice(
//   {
//   name: "todos",
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },

//   extraReducers: (builder) => {

//     builder
//       .addCase(fetchTodos.pending, (s) => {
//         s.loading = true;
//       })
//       .addCase(fetchTodos.fulfilled, (s, a) => {
//         s.loading = false;
//         s.list = a.payload;
//       })
//       .addCase(fetchTodos.rejected, (s, a) => {
//         s.loading = false;
//         s.error = a.error.message;
//       })

//       .addCase(addTodo.fulfilled, (s, a) => {
//         s.list.push(a.payload);
//       })

//       .addCase(updateTodo.fulfilled, (s, a) => {
//         const i = s.list.findIndex(t => t._id === a.payload._id);
//         if (i !== -1) s.list[i] = a.payload;
//       })

//       .addCase(deleteTodo.fulfilled, (s, a) => {
//         s.list = s.list.filter(t => t._id !== a.payload);
//       });
      
//   }
// });

// export default todoSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/todoService";

/* ---------------- ASYNC THUNKS ---------------- */
export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.fetchTodosAPI();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/add",
  async (data, { rejectWithValue }) => {
    console.log("Adding todo with text:", data);

    try {
      const res = await api.addTodoAPI(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({ id, text }, { rejectWithValue }) => {
    try {
      console.log("Updating todo with id:", id, "and text:", text);
      const data = {
        "text": text
      }
      const res = await api.updateTodoAPI(id, data); // make sure updateTodoAPI exists in your service
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id, { rejectWithValue }) => {
    console.log("Deleting todo with id:", id);
    try {
      await api.deleteTodoAPI(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

/* ---------------- TODO SLICE ---------------- */
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    /* FETCH TODOS */
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* ADD TODO */
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* UPDATE TODO */
    builder
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const i = state.list.findIndex((t) => t.id === action.payload.id);
        if (i !== -1) state.list[i] = action.payload;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* DELETE TODO */
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;

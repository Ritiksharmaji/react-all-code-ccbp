// import axios from "axios";

// /**
//  * Base API URL
//  * Backend must be running on this URL
//  */
// const API_URL = "http://localhost:5000/api/todos";

// /**
//  * GET → Fetch all todos
//  */
// export const fetchTodosApi = () => {
//   return axios.get(API_URL);
// };

// /**
//  * POST → Create new todo
//  */
// export const addTodoApi = (todo) => {
//   return axios.post(API_URL, todo);
// };

// /**
//  * PUT → Update existing todo
//  */
// export const updateTodoApi = (id, data) => {
//   return axios.put(`${API_URL}/${id}`, data);
// };

// /**
//  * DELETE → Delete todo
//  */
// export const deleteTodoApi = (id) => {
//   return axios.delete(`${API_URL}/${id}`);
// };

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token automatically to headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// ----------------- Todo APIs -----------------
export const fetchTodosAPI = () => API.get("/todos");
export const addTodoAPI = (data) => API.post("/todos", data);
export const updateTodoAPI = (id, data) => API.put(`/todos/${id}`, data);
export const deleteTodoAPI = (id) => API.delete(`/todos/${id}`);

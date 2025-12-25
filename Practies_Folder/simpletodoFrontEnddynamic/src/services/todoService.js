import axios from "axios";

/**
 * Base API URL
 * Backend must be running on this URL
 */
// const API_URL = "http://localhost:5000/api/todos";

// api for spring boot backend
const API_URL = "http://localhost:8080/api";

/**
 * GET → Fetch all todos
 */
export const fetchTodosApi = () => {
  // return axios.get(API_URL);
  return axios.get(`${API_URL}/todos`);
};

/**
 * POST → Create new todo
 */
export const addTodoApi = (todo) => {
  // return axios.post(API_URL, todo);
  return axios.post(`${API_URL}/todo`, todo);
};

/**
 * PUT → Update existing todo
 */
export const updateTodoApi = (id, data) => {
  // return axios.put(`${API_URL}/${id}`, data);
  return axios.put(`${API_URL}/todo/${id}`, data);
};

/**
 * DELETE → Delete todo
 */
export const deleteTodoApi = (id) => {
  // return axios.delete(`${API_URL}/${id}`);
  return axios.delete(`${API_URL}/todo${id}`);
};

import { createStore } from 'redux';
import { todoReducer } from './reducer';

const store = createStore(
  todoReducer,
  // Enable Redux DevTools Extension if available
  // This is useful for debugging and inspecting the Redux state 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

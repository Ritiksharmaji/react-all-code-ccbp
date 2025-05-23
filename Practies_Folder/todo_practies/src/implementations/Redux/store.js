import { createStore } from 'redux';
import todosReducer from './reducers';

const store = createStore(todosReducer);

export default store;
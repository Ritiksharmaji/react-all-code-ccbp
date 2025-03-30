import React from 'react';
import { Provider } from 'react-redux';
import TodoList from '../../components/TodoList';
import TodoItems from './TodoItems';
import store from './store';
import TodoFormRTK from './TodoFormRTK';

const TodoApp = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App (Redux Toolkit)</h1>
        <TodoFormRTK />
        <TodoList>
          <TodoItems />
        </TodoList>
      </div>
    </Provider>
  );
};

export default TodoApp;
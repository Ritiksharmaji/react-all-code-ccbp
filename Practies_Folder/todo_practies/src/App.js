import React from 'react';
import ReactStateTodo from './implementations/ReactState/TodoApp';
import ContextAPITodo from './implementations/ContextAPI/TodoApp';
import ReduxTodo from './implementations/Redux/TodoApp';
import ReduxToolkitTodo from './implementations/ReduxToolkit/TodoApp';

const App = () => {
  return (
    <div>
      <ReactStateTodo />
      <hr />
      <ContextAPITodo />
      <hr />
      <ReduxTodo />
      <hr />
      <ReduxToolkitTodo />
    </div>
  );
};

export default App;
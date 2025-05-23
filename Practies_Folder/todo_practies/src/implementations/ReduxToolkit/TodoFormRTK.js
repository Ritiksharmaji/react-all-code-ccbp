import React from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../../components/TodoForm';
import { addTodo } from './todoSlice';

const TodoFormRTK = () => {
  const dispatch = useDispatch();
  
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  return <TodoForm addTodo={handleAddTodo} />;
};

export default TodoFormRTK;
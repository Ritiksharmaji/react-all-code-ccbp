import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../../components/TodoForm';
import { addTodo } from './actions';

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(TodoForm);
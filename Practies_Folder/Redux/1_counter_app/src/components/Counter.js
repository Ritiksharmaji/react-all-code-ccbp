import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ margin: '5px' }}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '5px' }}>-</button>
      <button onClick={() => dispatch(reset())} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
};

export default Counter;

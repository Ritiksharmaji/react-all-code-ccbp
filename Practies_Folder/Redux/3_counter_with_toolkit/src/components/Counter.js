import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
      </div>
    </div>
  );
};

export default Counter;

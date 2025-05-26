import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync } from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <p>Status: {status}</p>
      <p>Value: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementAsync(5))}>Increment by 5 (Async)</button>
    </div>
  );
};

export default Counter;

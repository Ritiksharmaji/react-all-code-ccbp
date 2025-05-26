// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
} from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App (Async)</h1>
      <h2>{count}</h2>
      <p>Status: {status}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync(5))}>Increment Async +5</button>
    </div>
  );
}

export default App;

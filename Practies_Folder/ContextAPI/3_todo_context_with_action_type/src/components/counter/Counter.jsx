import { useContext } from "react";
import { CounterContext } from "../../context/counter/CounterContext";
import { changeCount, decrease, increase, increaseByFive, resetCount } from "../../context/counter/actions";

export default function Counter() {
  const { count, setCounter } = useContext(CounterContext);

  return (
    <>
      <h2>Count: {count}</h2>

    <button onClick={() => setCounter(increase())}>+1</button>
    <button onClick={() => setCounter(decrease())}>-1</button>
    <button onClick={() => setCounter(increaseByFive())}>+5</button>
    {/* dynaic type */}
    <button onClick={() => setCounter(changeCount(1))}>+1</button>
    <button onClick={() => setCounter(changeCount(-1))}>-1</button>
    <button onClick={() => setCounter(changeCount(5))}>+5</button>
    <button onClick={() => setCounter(resetCount())}>Reset</button>

    </>
  );

  //  const { count, dispatch } = useContext(CounterContext);

  // return (
  //   <>
  //     <h2>Count: {count}</h2>

  //   <button onClick={() => dispatch(increase())}>+1</button>
  //   <button onClick={() => dispatch(decrease())}>-1</button>
  //   <button onClick={() => dispatch(increaseByFive())}>+5</button>
  //   {/* dynaic type */}
  //   <button onClick={() => dispatch(changeCount(1))}>+1</button>
  //   <button onClick={() => dispatch(changeCount(-1))}>-1</button>
  //   <button onClick={() => dispatch(changeCount(5))}>+5</button>
  //   <button onClick={() => dispatch(resetCount())}>Reset</button>

  //   </>
  // );
}

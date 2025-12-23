import { TodoProvider } from "./context/todo/TodoProvider";
import TodoApp from "./components/todo/TodoApp";
import { CounterProvider } from "./context/counter/CounterProvider";
import Counter from "./components/counter/Counter";

function App() {
  return (
    // <TodoProvider>
    //   <TodoApp />
    // </TodoProvider>
    <CounterProvider>
      <Counter/>
    </CounterProvider>
  );
}

export default App;

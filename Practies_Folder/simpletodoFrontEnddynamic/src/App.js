import logo from './logo.svg';
import './App.css';
import { TodoUIProvider } from './context/TodoUIContext';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <TodoUIProvider>
      <TodoPage />
    </TodoUIProvider>
  );
}

export default App;

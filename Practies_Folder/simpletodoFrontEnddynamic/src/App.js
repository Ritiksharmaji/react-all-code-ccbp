// import logo from './logo.svg';
// import './App.css';
// import { TodoUIProvider } from './context/TodoUIContext';
// import TodoPage from './pages/TodoPage';

// function App() {
//   return (
//     <TodoUIProvider>
//       <TodoPage />
//     </TodoUIProvider>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoPage from "./pages/TodoPage";
import {login} from "./redux/slices/authSlice"
import AuthPage from "./pages/AuthPage";
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Optional: auto-login if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      // Dispatch a login action with token or call backend to validate
      dispatch(login({ token }));
    }
  }, [dispatch, user]);

  return <>{user ? <TodoPage /> : <AuthPage />}</>;
};

export default App;

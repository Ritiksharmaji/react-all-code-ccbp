import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>   {/* Wrap your App component inside BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </BrowserRouter>
);

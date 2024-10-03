import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRandom from './AppRandom';
import Destination from './Destionation';
import Simpletodo from './Simpletodo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/*  this is for Random numbe */}
    {/* <AppRandom /> */}

    {/* this is for Destination part  */}
    {/* <Destination /> */}

    {/* this is for simple todo  */}
    <Simpletodo />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

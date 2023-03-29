import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import classes from './index.module.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className = {classes.body}/>
  </React.StrictMode>
);


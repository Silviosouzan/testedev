// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Caminho correto
import './index.css'; // Se tiver algum estilo global

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

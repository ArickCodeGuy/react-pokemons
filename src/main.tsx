import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// style
import '/public/icon_font/style.css';
import './assets/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

// style
import '/public/icon_font/style.css';
import './assets/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router basename="/react-pokemons/">
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);

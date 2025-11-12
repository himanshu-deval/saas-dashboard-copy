import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './router';
import './index.css';
import { AppProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
);
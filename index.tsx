import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'rgb(var(--color-brand-primary))',
          color: 'rgb(var(--color-brand-text-secondary))',
          fontFamily: 'sans-serif',
        }}>
          Loading experience...
        </div>
      }>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
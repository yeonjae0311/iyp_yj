import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { UserProvider } from './modules/user';
import ErrorPage from './pages/commons/ErrorPage';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorPage>
            <App />
          </ErrorPage>
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>,
);

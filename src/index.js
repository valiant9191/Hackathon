import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ContextProvider from './context/ContextProvider';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

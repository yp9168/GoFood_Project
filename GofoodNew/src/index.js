import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot ? ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ) : ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  } else {
    console.error('The root element with id "root" was not found in the DOM.');
  }
});

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Initialize the React application by creating a root and rendering the App component
 * within StrictMode for additional development checks.
 */
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Measure performance metrics for the application.
 * To log results, pass a callback function: reportWebVitals(console.log)
 * Or send to an analytics endpoint.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
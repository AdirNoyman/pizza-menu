import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello Adiros 🤓</h1>;
};

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

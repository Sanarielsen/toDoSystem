import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'

// const routerBaseName = process.env.PUBLIC_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.scss';
import App from './App';
// import Applications from './pages/Applications';
// import Resources from './pages/Resources';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Applications />
//   },
//   {
//     path: '/resources',
//     element: <Resources />
//   }
// ]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

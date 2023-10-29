import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Berita from './pages/Berita.jsx';
import ArrayData from './pages/ArrayData.jsx';
import CounterApp from './pages/ClassPages/CounterApp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'array-data',
        element: <ArrayData />,
      },
      {
        path: 'dicoding-berita',
        element: <Berita />,
      },
      {
        path: 'counter-class',
        element: <CounterApp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

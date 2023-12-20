import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Shop from './shop-page/Shop.jsx';
import Item from './shop-page/Item.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shop/:itemId',
    element: <Item />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/HomePage/App.jsx';
import Shop from './components/shop-page/Shop.jsx';
import Item from './components/shop-page/Item.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/cart-page/Cart.jsx';
import ErrorPage from './components/shop-page/ErrorPage.jsx';

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
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

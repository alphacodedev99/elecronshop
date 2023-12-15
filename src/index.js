import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

// pages
import ProductPage from './pages/ProductPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import CartProductsPage from './pages/CartProductsPage.jsx';
import FavoriteProductsPage from './pages/FavoriteProductsPage.jsx';




const router = createBrowserRouter([
  // mainRouter
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetailsPage />
      },
      {
        path: '/cartProducts',
        element: <CartProductsPage />
      },
      {
        path: '/favoriteProducts',
        element: <FavoriteProductsPage />
      }
    ],

  }

  // deshboard example
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



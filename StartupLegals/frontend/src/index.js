import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Login  from './pages/Login/Login';
import CreateContract from './pages/CreateContract/CreateContract';
import Register from './pages/Register/Register'

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import SignContract from './pages/SignContract/SignContract';
import Test from './Test';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create_contract",
    element: <CreateContract/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/sign",
    element: <SignContract/>
  },
  {
    path: "/test",
    element: <Test/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import BA from "./pages/BA";
import Portfolio from "./pages/Portfolio";
import React from 'react';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: 'bachelor-thesis', element: <BA></BA> },
      { path: 'portfolio', element: <Portfolio></Portfolio>,}
    ]

  },

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

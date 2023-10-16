import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    { path: '/browse', element: <Browse /> }, // Changed path to '/browse'
  ]);

  return (
    <div>
      {/* Ensure that RouterProvider is wrapped properly */}
      <RouterProvider router={appRouter}>
        {/* Add other components as needed */}
        <Header />
      </RouterProvider>
    </div>
  );
};

export default Body;

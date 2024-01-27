import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movie from './Movie';

const Body = () => {
    const AppRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login /> 
        },
        {
            path : '/rowse',
            element : <Browse /> 
        },
        {
          path : '/movie/:id',
          element : <Movie />
        }
    ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default Body;
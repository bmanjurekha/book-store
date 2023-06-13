/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a App.tsx file which contains
 * App Header & styles(app.css) required for the application 
	 Routing information for the pages & references to pages
   Create Browser Router fetches the element based on the path from defined routes
	 User, Role Information Component that is displayed on the header
 */

import React from 'react';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import BookPage from './page/BookPage';
import UsersPage  from './page/UsersPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserInfo from './component/UserInfo';



const routes = [
  {
    path: '*',
    element: <LoginPage />
  },
  {
    path:'/Register',
    element : <RegisterPage/>

  },
  {
    path:'/Book',
    element : <BookPage />
  },
  {
    path:'/Users',
    element : <UsersPage />
  }
]

function App() {
  return (
    <>
      <h1 className="App-header">
        Bookstore Website 
       <UserInfo/>
        </h1>
      <RouterProvider router={createBrowserRouter(routes)} />
      </>
  );
}
  


export default App;
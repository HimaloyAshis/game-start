import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../layout/Main';
import ErrorElement from '../pages/ErrorElement';
import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
const router = createBrowserRouter([
    {
        path:'/',
        Element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../layout/Main';

import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
import ErrorElement from '../pages/errorElement/ErrorElement';
import SingleCard from '../pages/SingleCard/SingleCard';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
            },
            {
                path:'/singleCard/:id',
                element:<SingleCard></SingleCard>
            }
        ]
    }
])

export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../layout/Main';

import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
import ErrorElement from '../pages/errorElement/ErrorElement';
import SingleCard from '../pages/SingleCard/SingleCard';
import cardDetails from '../api/cardDetails';
import CollegeName from '../pages/CollegeName/CollegeName';
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
                element:<SingleCard></SingleCard>,
                loader: cardDetails
            },
            {
                path:'/collegeName',
                element:<CollegeName></CollegeName>
            }
        ]
    }
])

export default router;
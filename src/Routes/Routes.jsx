import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../layout/Main';
import ErrorElement from '../pages/ErrorElement';
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
            
        ]
    }
])

export default router;
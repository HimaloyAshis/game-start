import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
const router = createBrowserRouter([
    {
        path:'/',
        Element:<Home></Home>,
        children:[
            {
                
            }
        ]
    }
])

export default Routes;
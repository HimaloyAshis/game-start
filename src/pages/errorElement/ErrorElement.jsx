import React from 'react';
import './ErrorElement.css'
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const {error, status} = useRouteError()

    return (
        <div className='Error'>
            <div>
                
            </div>
            
        </div>
    );
};

export default ErrorElement;
import React from 'react';
import './ErrorElement.css'
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const {error, status} = useRouteError()

    return (
        <div className='Error '>
            <div className='flex flex-col justify-center items-center pt-10 text-white font-bold text-xl'>
                <h1><span>Error</span>
                    {status || 404}
                </h1>
                <p>{error.message}</p>
                <p>Please provide a valid link</p>
                <Link to={'/'}><button className="btn btn-active btn-neutral mt-3">Go Back</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorElement;
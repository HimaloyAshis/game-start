import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCard = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h1>card</h1>
        </div>
    );
};

export default SingleCard;
import axios from 'axios';
import React from 'react';

const cardDetails = async ({params}) => {

    const response = await axios('')
    const data = await response.json()

    return data;
};

export default cardDetails;
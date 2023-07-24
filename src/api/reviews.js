import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const reviews = () => {

    const {data : review=[]}= useQuery({
        queryKey:['reviews'],
        queryFn : async ()=>{
            const res = await axios('http://localhost:5000/reviews')
            return res.data
        }
    })

    return [review]

};

export default reviews;
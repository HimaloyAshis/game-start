import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#EEE2DE] flex gap-4 justify-center bg-fixed  font-bold pt-4 pb-4 items-center'>
            <Link>Home</Link>
            <Link to={'/ok'}>Admission</Link>
            <Link to={'collegeName'}>Colleges</Link>
            <Link>My College</Link>
            
        </div>
    );
};

export default Navbar;
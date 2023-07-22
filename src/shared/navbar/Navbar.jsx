import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-black'>
            <Link>Home</Link>
            <Link>College</Link>
            <Link>Admission</Link>
            <Link>My College</Link>
        </div>
    );
};

export default Navbar;
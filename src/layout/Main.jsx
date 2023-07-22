import React from 'react';
// import Navbar from '../shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
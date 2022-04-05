import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-white py-5">
            <div className="gap-5 text-xl font-bold flex justify-center nav">
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    );
};

export default Header;
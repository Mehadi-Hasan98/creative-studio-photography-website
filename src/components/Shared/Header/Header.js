import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='studio-name'>
                <h2>Gleam Studio</h2>
                </div>
                    <a href="">Home</a>
                    <a href="">Services</a>
                    <a href="">Checkout</a>
                    <a href="">Blogs</a>
                    <a href="">Login</a>
                    <a href="">About</a>
            </nav>
        </div>
    );
};

export default Header;
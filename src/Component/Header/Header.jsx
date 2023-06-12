import React from 'react';
import './Header.scss';
import Logo from '../../Images/Google-Keep-Logo.png';
import Author from '../../Images/Rich-Sandeep.jpg';

const Header = () => {
    {/* Header component */}
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={Logo} alt="logo" />
                <h1>Google Keep Clone</h1>
            </div>
            <div className='header-content'>
                <img src={Author} alt="author" />
                <a href='#'><h1>Rich Sandeep</h1></a>
            </div>
        </div>
    )
}

export default Header
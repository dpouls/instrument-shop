import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

export default props => (
    <header className='main-header'>
        <h1>ShopName</h1>
        <nav>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/shop' className='nav-link'>Shop</Link>
            <Link to='/custom' className='nav-link'>Custom</Link>
            <Link to='/about' className='nav-link'>About Us</Link>
        </nav>
    </header>
)
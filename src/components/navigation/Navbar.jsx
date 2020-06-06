import React from 'react';
import { Link } from 'react-router-dom';
import  '../../styles/navigation/navigation.scss';

const Navbar = () => {
    return (
        <div className='navigation'>
            <h1>Local Market</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/cart'>Cart</Link>

            </nav>
        </div>
    );
}

export default Navbar;

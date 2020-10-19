import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [adminIsHidden, setAdminIsHidden]=useState(false)
    const toggleAdmin = e => {
        setAdminIsHidden(!adminIsHidden)
    }
    return (
        <div 
        onDoubleClick={toggleAdmin}
        className='navigation'>
            <h1 className='nav-title'>Local Market</h1>
            <nav>
                <Link className='desktop-link' to='/'>Home</Link>
                <Link className='desktop-link' to='/shop'>Shop</Link>
                <Link to='/cart'><i className="fas fa-shopping-cart"></i></Link>
            </nav>
        </div>
    );
}

export default Navbar;

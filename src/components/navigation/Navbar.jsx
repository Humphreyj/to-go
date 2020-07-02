import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import  '../../styles/navigation/navigation.scss';

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
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/cart'>Cart</Link>
                <Link className={adminIsHidden ? 'admin hide': 'admin'} to='/admin'>Admin</Link>

            </nav>
        </div>
    );
}

export default Navbar;

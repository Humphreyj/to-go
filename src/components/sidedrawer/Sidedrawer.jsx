import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import UIC from '../../contexts/UIC';

const Sidedrawer = () => {
    const {sideDrawerOpen, setSideDrawerOpen}=useContext(UIC);
    return (
        <div className={sideDrawerOpen ? 'sidedrawer open' : 'sidedrawer'}>
            <Link onClick={()=>setSideDrawerOpen(false)} className='side-link' to='/'>Home</Link>

            <Link onClick={()=>setSideDrawerOpen(false)} className='side-link' to='/menu'>Menu</Link>

            <Link onClick={()=>setSideDrawerOpen(false)} className='side-link' to='/cart'><i className="fas fa-shopping-cart"></i></Link>

            <Link onClick={()=>setSideDrawerOpen(false)} className='side-link' to='/admin'>Admin</Link>
        </div>
    );
}

export default Sidedrawer;

import React,{useContext} from 'react';
import UIC from '../contexts/UIC';


const MobileNav = () => {
    const {sideDrawerOpen,setSideDrawerOpen} =useContext(UIC);
    return (
        <div onClick={()=>setSideDrawerOpen(!sideDrawerOpen)} className='mobile-nav'>
            <i className={sideDrawerOpen ? "fa fa-2x fa-bars rotate" : "fa fa-2x fa-bars"}></i>
        </div>
    );
}

export default MobileNav;

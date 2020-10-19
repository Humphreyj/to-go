import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/splash.scss';

const Splash = () => {
    return (
        <div className ='splash-page'>
            <div className="apples">
                <div className="showcase-text">
                    <p>The most Amazing Local Market Ever.</p>
                </div>
            </div>
            <p className='store-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo totam repellat, libero delectus quam a, consequuntur ipsa eius eos, aliquid temporibus ducimus quia ratione fugit.</p>
            <Link to='/shop'><button className="see-menu">See Our Products</button></Link>
           
           <div className="banner-two">
                <div className="showcase-text">
                    <p>An almost unbelievable selection!</p>
                </div>
            </div>
        </div>
    );
}

export default Splash;

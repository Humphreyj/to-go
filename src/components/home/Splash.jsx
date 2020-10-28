import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/splash.scss';

import FeaturedItems from '../home/FeaturedItems';
import FeaturedCollections from '../home/FeaturedCollections';
const Splash = () => {
    return (
        <div className ='splash-page'>
            <div className="apples">
                <div className="showcase-text">
                    <p>The most Amazing Local Market Ever.</p>
                </div>
            </div>

            <Link to='/shop'><button className="shop-now">Shop Now</button></Link>

            <div className="weekly-savings">
                <div className="coupon-container">
                    <h4>Check out our deals this week</h4>
                    <h6>Shop & save with our online weekly ad</h6>
                    <button>Shop & save</button>
                </div>
            </div>
            <FeaturedCollections />
            <h4 className="featured-header">Today's featured items</h4>
            <FeaturedItems />

            

            


        </div>
    );
}

export default Splash;

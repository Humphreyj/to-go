import React, {useState,useEffect, useContext} from 'react';
import {Route,Link} from 'react-router-dom';

import Collections from './Collections'
import Product from '../../../utils/Product';
import ItemContext from '../../../contexts/ItemContext';


import '../../../styles/menu/menu.scss'
import FeaturedItem from './FeaturedItem'

const Menu = () => {
    const {shopCategories, shopInventory} = useContext(ItemContext)
    return (
       
        <div className='main-menu'>
             
          
            <div className="menu-navigation">
                <Link to='/collections'>Collections</Link>
            </div>
            
            <div className="category-box">
                {shopCategories.map(cat => {
                    return(
                        <div className="individual-category">
                            <img className='individual-category-image' src={cat.img} alt=""/>
                            <Link to={`/categories/${cat.name}`} className='individual-category-name'>{cat.name}</Link>
                        </div>
                        
                    )
                })}
            </div>
            
            
            

            
            
            

           
        </div>
    );
}

export default Menu;

import React, {useState,useEffect, useContext} from 'react';
import {Route,Link} from 'react-router-dom';

import Collections from './Collections'
import Product from '../../../utils/Product';
import ItemContext from '../../../contexts/ItemContext';


import '../../../styles/menu/menu.scss'


const Menu = () => {
    const {shopCategories, shopInventory} = useContext(ItemContext)
    return (
       
        <div className='main-menu'>
             
          
            <h3 className="shop-by-category">Shop By Category</h3>
            
            <div className="category-box">
                {shopCategories.map(cat => {
                    return(
                        <div className="individual-category">
                            <img className='individual-category-image' src={cat.img} alt=""/>
                            <Link to={`/categories/${cat.name}`} className='individual-category-name'>{cat.name}</Link>
                            <div className="sub-categories">
                                {cat.subCategories.map((subCat,i) => {
                                    return(
                                        <p className="sub-category">{subCat}</p>
                                    )
                                })}
                            </div>
                        </div>
                        
                    )
                })}
            </div>

            <div className="menu-navigation">
                <h3 className="shop-by-collection">Or browse our <Link to='/collections'>collections</Link></h3>
            </div>
            
            
            

            
            
            

           
        </div>
    );
}

export default Menu;

import React, {useState,useEffect, useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import Product from '../../../utils/Product';
import ItemContext from '../../../contexts/ItemContext';

import '../../../styles/menu/menu.scss'
import FeaturedItem from './FeaturedItem'
const Menu = () => {
    const {shopCategories, shopInventory} = useContext(ItemContext)
    const [menuCats, setMenuCats]=useState(shopCategories)
    const [shopMenu, setShopMenu]=useState(shopInventory)
    useEffect(() => {
        if(shopCategories.length === 0) {
            setMenuCats(shopCategories)
        }else {
            setMenuCats(shopCategories.unshift('All'))
            
        }
    },[])

    const filterMenu = cat => {
        setShopMenu(shopInventory.filter(item => cat === item.itemCategory ))
    }

    return (
       
        <div className='main-menu'>
             
            
            <div className="menu-navigation">
                {menuCats.length > 0 ? menuCats.map(item => {
                    return (
                        <p 
                        onClick={()=>filterMenu(item)}
                        >{item}</p>
                    )
                }): <p>Nothing here.</p> }
            </div>

            {shopMenu.length >  0 ? shopMenu.map(item => {
                return (
                    <Product 
                    item={item}
                    name={item.name}
                    price={item.itemPrice}
                    category={item.itemCategory}
                    />
                )
            }) : <p>Nothing here.</p>}

           
        </div>
    );
}

export default Menu;

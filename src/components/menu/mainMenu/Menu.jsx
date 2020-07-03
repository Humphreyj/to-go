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

    const filterMenu = cat => {
        setShopMenu(shopInventory.filter(item => cat === item.itemCategory ))
    }
    const showAll = e => {
        setShopMenu(shopInventory)
    }

    return (
       
        <div className='main-menu'>
             
          
            <div className="menu-navigation">
                <p onClick={showAll}>All</p>
                {menuCats.length > 0 ? menuCats.map(item => {
                    return (
                        <p 
                        onClick={()=>filterMenu(item)}
                        >{item}</p>
                    )
                }): '' }
            </div>
                <div className="menu-display">
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
            

           
        </div>
    );
}

export default Menu;

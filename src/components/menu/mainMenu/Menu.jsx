import React, {useState,useEffect, useContext} from 'react';
import {Route,Link} from 'react-router-dom';
import Categories from './Categories';
import Collections from './Collections'
import Product from '../../../utils/Product';
import ItemContext from '../../../contexts/ItemContext';


import '../../../styles/menu/menu.scss'
import FeaturedItem from './FeaturedItem'

const Menu = () => {
    const {shopCategories, shopInventory} = useContext(ItemContext)
    const [menuCats, setMenuCats]=useState(shopCategories)
    const [shopMenu, setShopMenu]=useState(shopInventory)
    const [catsAreVisible,setCatsAreVisible]=useState(false)
    const [collectionsAreVisible, setCollectionsAreVisible]=useState(false)

    const filterMenu = cat => {
        setShopMenu(shopInventory.filter(item => cat === item.itemCategory ))
    }
    const filterCollection = collection => {
        setShopMenu(shopInventory.filter(item =>collection ===item.collection))
    }
    const showAll = e => {
        setShopMenu(shopInventory)
    }

    return (
       
        <div className='main-menu'>
             
          
            <div className="menu-navigation">
                <p onClick={showAll}>All</p>
                <p onMouseEnter={()=>setCatsAreVisible(true)}
                >Categories</p>
                <p onMouseEnter={()=>setCollectionsAreVisible(true)}>Collections</p>
            </div>
            
            {catsAreVisible ? <Categories catsAreVisible={catsAreVisible}
                setCatsAreVisible={setCatsAreVisible} filterMenu={filterMenu} /> : ''}
            {collectionsAreVisible ? <Collections collectionsAreVisible={collectionsAreVisible} setCollectionsAreVisible={setCollectionsAreVisible} filterCollection={filterCollection} /> : ''}

            
            <div className="menu-display">
            {shopMenu.length >  0 ? shopMenu.map((item,i) => {
            return (
                <Product 
                key={i}
                itemImg={item.itemImg}
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

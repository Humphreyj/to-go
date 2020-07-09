import React,{useContext,useState,useEffect} from 'react';
import Navigation from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import Routes from './utils/routes/Routes';
import ItemContext from './contexts/ItemContext';
import CoinContext from './contexts/CoinContext';
import {categories, inventory,collections} from './data/products'
import './App.css';
import axios from 'axios';

import { Route } from 'react-router-dom';
import CartContext from './contexts/CartContext';

function App() {
 const [cart,setCart] = useState([])
 const [shopInventory, setShopInventory] =useState(inventory)
 const [shopCategories, setShopCategories]=useState(categories)
 const [shopCollections, setShopCollections]=useState(collections)
 const [shopOrders, setShopOrders] =useState([])
  // const coin_API_KEY =  'b11da64dda6738ee93296df31ad2d9e889f1f8777923eee55ccb14229e8d17fe'
  const [total, setTotal] = useState(0);
  const getTotalPrice = () => {
    let itemPrices = [];
    let total;
    cart.map(item => {
        total = item.itemPrice * item.inCart
        console.log(total)
        itemPrices.push(total)
    })
    let result = itemPrices.length > 0 ? itemPrices.reduce((a,b) => {
        return parseInt(a) + parseInt(b)
    }) : 0
    setTotal(result)
    console.log(result)
}
  return (
    <ItemContext.Provider value={{shopInventory,setShopInventory,shopCategories,setShopCategories,shopCollections, setShopCollections,shopOrders,setShopOrders}}>
        <CartContext.Provider value={{cart,setCart,total,setTotal,getTotalPrice}}>
        <div className="App">
          <Navigation />
          <div className='main'>
            <Routes />
          </div>
          <Footer />
        </div>
        </CartContext.Provider>
    </ItemContext.Provider>
    
  );
}

export default App;

import React,{useContext,useState,useEffect} from 'react';
import Navigation from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import Routes from './utils/routes/Routes';
import ItemContext from './contexts/ItemContext';
import CoinContext from './contexts/CoinContext';
import {paperGoodsList, fruitList, veggieList,meatList} from './data/products'
import './App.css';
import axios from 'axios';

import { Route } from 'react-router-dom';
import CartContext from './contexts/CartContext';

function App() {
 const [stellarPrice,setStellarPrice] = useState()
 const [cart,setCart] = useState([])
  const coin_API_KEY =  'b11da64dda6738ee93296df31ad2d9e889f1f8777923eee55ccb14229e8d17fe'
  const getStellarPrice = () => {
    axios
    .get(`https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD,EUR&api_key=${coin_API_KEY}`)
    .then(res => {
      setStellarPrice(res.data.USD)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getStellarPrice()
  })
  return (
    <ItemContext.Provider value={{paperGoodsList,fruitList, veggieList,meatList}}>
      <CoinContext.Provider value={{stellarPrice}}>
        <CartContext.Provider value={{cart,setCart}}>
        <div className="App">
          <Navigation />
          <div className='main'>
            <Routes />
          </div>
          <Footer />
        </div>
        </CartContext.Provider>

      </CoinContext.Provider>
    </ItemContext.Provider>
    
  );
}

export default App;

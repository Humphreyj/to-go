import React,{useState,useContext,useEffect} from 'react';
import '../../styles/price/price.scss';
import CartContext from '../../contexts/CartContext';

const Price = () => {
    const {cart} = useContext(CartContext);
    const [total,setTotal] =useState(0)
    const getTotalPrice = () => {
        let itemPrices = [];
        cart.map(item => {
            itemPrices.push(item.itemPrice)
        })
        let result = itemPrices.length > 0 ? itemPrices.reduce((a,b) => {
            return parseInt(a) + parseInt(b)
        }) : 0
        setTotal(result)
        console.log(result)
    }
    useEffect(() => {
        getTotalPrice();
    },[cart])
    
    return (
        <div className='price-display'>
            <h4 className="price-title">Total Price: {total}</h4>
            {total > 0 ? <button>Checkout</button> : ''}
            
        </div>
    );
}

export default Price;

import React,{useState,useContext,useEffect} from 'react';
import '../../styles/price/price.scss';
import CartContext from '../../contexts/CartContext';

const Price = () => {
    const {cart,total,setTotal,getTotalPrice} = useContext(CartContext);
    
    
    useEffect(() => {
        getTotalPrice();
    },[cart])
    
    return (
        <div className='price-display'>
           {total > 0 ?  <h4 className="price-title">Total Price: {total}</h4> : ''}
            {total > 0 ? <button className='checkout'>Checkout</button> : ''}
            
        </div>
    );
}

export default Price;

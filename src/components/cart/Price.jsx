import React,{useState,useContext,useEffect} from 'react';
import '../../styles/price/price.scss';
import CartContext from '../../contexts/CartContext';
import ItemContext from '../../contexts/ItemContext';
import CheckoutModal from './CheckoutModal';

const Price = () => {
    const {cart,setCart,total,setTotal,getTotalPrice} = useContext(CartContext);
    const{shopOrders,setShopOrders} = useContext(ItemContext);
    const [checkingOut, setCheckingOut]=useState(false);
    const checkout = () => {
        console.log(cart)
        setCheckingOut(true)
        setShopOrders([...shopOrders,cart]);
        // setCart(cart => [])
    } 
    
    useEffect(() => {
        getTotalPrice();
    },[cart])
    
    return (
        <div className='price-display'>
           {total > 0 ?  <h4 className="price-title">Total Price: {total}</h4> : ''}
            {total > 0 ? <button 
            onClick={checkout}
            className='checkout'>Checkout</button> : ''}
            {checkingOut ? <CheckoutModal /> : ''}
            
        </div>
    );
}

export default Price;

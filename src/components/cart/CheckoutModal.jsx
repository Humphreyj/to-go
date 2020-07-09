import React,{useContext,useEffect,useState} from 'react';
import CartContext from '../../contexts/CartContext';


const CheckoutModal = () => {
    const {cart, total}=useContext(CartContext);
    return (
        <div>
            <h4 className="thank-you">Thank you for shopping with us!</h4>
            <h4 className="your-total">Your total is: {total}</h4>
        </div>
    );
}

export default CheckoutModal;

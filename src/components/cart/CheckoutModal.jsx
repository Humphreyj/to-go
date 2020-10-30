import React,{useContext,useState} from 'react';
import CartContext from '../../contexts/CartContext';
import Backdrop from '../../utils/Backdrop';


const CheckoutModal = (props) => {
    const {setCart, total}=useContext(CartContext);

    const completeCheckout =() => {
        props.setCheckingOut(false)
        setCart(cart => []);
        window.location ='/shop';
    }
    return (
        <>
         <Backdrop
            set={props.setCheckingOut}
            show={props.checkingOut}
             />
        <div className='checkout-modal'>
            <h4 className="thank-you">Thank you for shopping with us! </h4>
           
            <h4 className="your-total">Your total is: ${total}</h4>
            <h4 className='confirmation'>Your order has been recieved and we will notify you when it is ready for pick up!</h4>
            <button className='confirm-button' onClick={completeCheckout}>Confirm</button>
        </div>
        </>
        
    );
}

export default CheckoutModal;

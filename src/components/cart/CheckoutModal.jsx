import React,{useContext,useEffect,useState} from 'react';
import CartContext from '../../contexts/CartContext';
import ProductInCart from '../../utils/ProductInCart';
import Backdrop from '../../utils/Backdrop';


const CheckoutModal = (props) => {
    const {cart,setCart, total}=useContext(CartContext);
    const [backdrop,setBackdrop]=useState(true)

    const completeCheckout =() => {
        props.setCheckingOut(false)
        setCart(cart => []);
        window.location ='/menu';
    }
    return (
        <>
         <Backdrop
            set={props.setCheckingOut}
            show={props.checkingOut}
             />
        <div className='checkout-modal'>
            <h4 className="thank-you">Thank you for shopping with us! </h4>
           
            <h4 className="your-total">Your total is: {total}</h4>
            <h4>Your receipt has been emailed to your address on file.</h4>
            <button onClick={completeCheckout}>Confirm</button>
        </div>
        </>
        
    );
}

export default CheckoutModal;

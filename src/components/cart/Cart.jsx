import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import ProductInCart from '../../utils/ProductInCart';
import Price from './Price';
import CartContext from '../../contexts/CartContext';

import '../../styles/cart/cart.scss';


const Cart = () => {
    const {cart} =useContext(CartContext)
    console.log(cart)
    return (
        <div className='cart'>
            <h4 className="review">Review your cart</h4>

            <div className="cart-products">
                {cart.length > 0 ? cart.map(cartItem => {
                    return (
                    <ProductInCart
                    name={cartItem.name}
                    price={cartItem.itemPrice}
                    img={cartItem.itemImg}
                    inCart={cartItem.inCart}
                    item={cartItem}
                     />
                    )
                }) : <p className='no-items'>You have no items in your cart. View our amazing <Link to='/menu'>products</Link></p>}
            </div>
        

        <Price />    
        </div>
    );
}

export default Cart;

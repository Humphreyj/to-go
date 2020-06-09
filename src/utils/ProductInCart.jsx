import React,{useContext} from 'react';
import CartContext from '../contexts/CartContext';
import '../styles/cart/productInCart.scss';

const Product = (props) => {
    const {cart, setCart} = useContext(CartContext);
    const removeFromCart = (name) => {
            setCart(cart.filter(item => item.name !== name))
    }
    return (
        <div className='product-in-cart'>
            <img src={props.img} alt={props.name} className="product-in-cart-image"/>
            <div className="product-in-cart-info">
                <h4 className="product-in-cart-name">{props.name}</h4>
                <h4 className="product-in-cart-price">{props.price}</h4>
            </div>
            <div className="product-in-cart-buttons">
                <button 
                className="remove-from-cart"
                onClick={()=> removeFromCart(props.name)}
                >Remove</button>
            </div>
        </div>
    );
}

export default Product;

import React,{useState,useContext} from 'react';
import CartContext from '../contexts/CartContext';
import '../styles/product/product.scss';

const Product = (props) => {
    const {cart, setCart} = useContext(CartContext);
    const addToCart = () => {
        if(cart.indexOf(props.item) == -1) {
            props.item.inCart +=1;
            setCart([...cart,props.item])
            console.log(props.item)
        }else {
            props.item.inCart +=1;
            console.log(props.item)
        }
        
    }
    
    
    return (
        <div className='product'>
            {/* <img src={props.img} alt={props.name} className="product-image"/> */}
            <div className="product-info">
                <h4 className="product-name">{props.name}</h4>
                <h4 className="product-price">{props.price}</h4>
            </div>
            <div className="product-buttons">
 
                <button 
                className="add-to-cart"
                onClick={addToCart}
                >Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;

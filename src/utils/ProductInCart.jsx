import React,{useState,useContext,useEffect} from 'react';
import CartContext from '../contexts/CartContext';
import '../styles/cart/productInCart.scss';

const Product = (props) => {
    const [quantity,setQuantity] =useState(props.inCart)
    const [itemTotal, setItemTotal] =useState(props.price * quantity);
    const [outOfStock,setOutOfStock] = useState(false)
    const {cart, setCart,total,setTotal,getTotalPrice} = useContext(CartContext);
    const removeFromCart = (name) => {
            setCart(cart.filter(item => item.name !== name))
            props.item.itemQuantity += props.item.inCart 
            props.item.inCart = 0;
    }
    const increaseAmount = (name) => {
       if(props.item.itemQuantity <= 0) {
            setOutOfStock(true)
       }else {
        setQuantity(quantity => quantity +=1)
        props.item.inCart += 1;
        props.item.itemQuantity -= 1;
        getTotalPrice();
       }
    
    }
    const decreaseAmount = (name) => {
        
        if(quantity <= 1) {
           removeFromCart(name);
        }else {
            setQuantity(quantity => quantity -=1);
            props.item.itemQuantity += 1;
            setTotal(total => total - props.price)
            if(props.item.itemQuantity > 0) {
                setOutOfStock(false)
            }
        }
    }
    useEffect(() => {
        setItemTotal(props.price * quantity)
        
    },[quantity])
    
    return (
        <div className='product-in-cart'>
            
            <div className="product-in-cart-info">
                <img src={props.img} alt={props.name} className="product-in-cart-image"/>
                <h4 className="product-in-cart-name">{props.name}</h4>
                <h4 className="product-in-cart-price">${props.price}</h4>
                <h4 className="product-in-cart-amount">x {quantity}</h4>
                <h4 className="item-total">${itemTotal}</h4>
            </div>
            <div className="product-in-cart-buttons">
            <button 
                className="decrease-item-in-cart"
                onClick={()=>decreaseAmount(props.name)}
                ><i className="fas fa-minus-square"></i></button>
                <button 
                className="remove-from-cart"
                onClick={()=> removeFromCart(props.name)}
                ><i className="fas fa-trash-alt"></i></button>
                <button 
                className={outOfStock ? "hide" : "increase-item-in-cart"}
                onClick={()=>increaseAmount(props.name)}
                ><i className="fas fa-plus-square"></i></button>
            </div>
        </div>
    );
}

export default Product;

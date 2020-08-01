import React,{useState,useEffect,useContext} from 'react';
import CartContext from '../contexts/CartContext';
import '../styles/product/product.scss';


const Product = (props) => {
    const {cart, setCart} = useContext(CartContext);
    const [itemUnavailable, setItemUnavailable]=useState(false);
    useEffect(() => {
        if(props.item.itemQuantity <= 0) {
            console.log(props.item)
            setItemUnavailable(true)
        }else {
            setItemUnavailable(false)
        }
    },[])
    const addToCart = () => {
        if(props.item.itemQuantity <= 0) {
            setItemUnavailable(true)
        }else {
            if(cart.indexOf(props.item) == -1) {
                setItemUnavailable(false)
                props.item.inCart +=1;
                props.item.itemQuantity -= 1;
                setCart([...cart,props.item])
                console.log(props.item)
                //if the item is not found in the cart it gets one added to the amount in cart and on subtracted from the amount in inventory.
                //then it gets added to the cart.
            }else {
                setItemUnavailable(false)
                props.item.inCart +=1;
                props.item.itemQuantity -= 1;
                console.log(props.item)
                //if it is already in the cart, the numbers are adjusted accordingly.
            }
        }
    
        
    }
    
    
    return (
        <div className='product'>
            <img src={props.itemImg} alt={props.name} className="product-image"/>
            <div className="product-info">
                <h4 className="product-name">{props.name}</h4>
                <h4 className="product-price">{props.price}</h4>
            </div>
            <div className="product-buttons">
 
            {itemUnavailable ? <button 
                className="out-of-stock"
                onClick={addToCart}
                >Out Of Stock</button> :     <button 
                className="add-to-cart"
                onClick={addToCart}
                >Add to Cart</button>}
            </div>
        </div>
    );
}

export default Product;

import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
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
    const inCartNotify = () => {
        toast.success(`${props.name} added to Cart.`, {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    const itemIsUnavailable = () => {
        toast.error(`This item is currently unavailable.`, {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
    })
};
    const addToCart = () => {
        if(props.item.itemQuantity <= 0) {
            setItemUnavailable(true)
            itemIsUnavailable()
        }else {
            if(cart.indexOf(props.item) == -1) {
                setItemUnavailable(false)
                props.item.inCart +=1;
                props.item.itemQuantity -= 1;
                inCartNotify()
                setCart([...cart,props.item])
                console.log(props.item)

                //if the item is not found in the cart it gets one added to the amount in cart and on subtracted from the amount in inventory.
                //then it gets added to the cart.
            }else {
                setItemUnavailable(false)
                props.item.inCart +=1;
                props.item.itemQuantity -= 1;
                inCartNotify();
                console.log(props.item)
                //if it is already in the cart, the numbers are adjusted accordingly.
            }
        }
    
        
    }
    const toTop = () => {
        window.scrollTo(0, 0)
    }
    
    
    return (
        <div className='product'>
            <img src={props.itemImg} alt={props.name} className="product-image"/>
            <div className="product-info">
                <Link to={`/categories/${props.category}/${props.name}`} className="product-name" onClick={toTop}>{props.name}</Link>
                <h4 className="product-price">{props.price}</h4>
            </div>
            <div className="product-buttons">
 
            {itemUnavailable ? <button 
                className="out-of-stock"
                onClick={addToCart}
                >Out Of Stock</button> : <button 
                className="add-to-cart"
                onClick={addToCart}
                >Add to Cart</button>}
            </div>
        </div>
    );
}

export default Product;

import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemContext from '../../../contexts/ItemContext';
import CartContext from '../../../contexts/CartContext';
import {ToastContainer, toast} from 'react-toastify';

import ProductReviews from './ProductReviews';
import RelatedProducts from './RelatedProducts';

const ProductDetails = (props) => {
    const {shopInventory}=useContext(ItemContext)
    const{cart,setCart}=useContext(CartContext);
    const [itemUnavailable, setItemUnavailable]=useState(false);

    let get_item = shopInventory.filter(item => props.match.params.item === item.name)
    let target_item = get_item[0]
    
    useEffect(() => {
        if(target_item.itemQuantity <= 0) {
            console.log(target_item)
            setItemUnavailable(true)
        }else {
            setItemUnavailable(false)
        }
    },[])

    const inCartNotify = () => {
        toast.success(`${target_item.name} added to Cart.`, {
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
        if(target_item.itemQuantity <= 0) {
            setItemUnavailable(true)
            itemIsUnavailable()
        }else {
            if(cart.indexOf(target_item) == -1) {
                setItemUnavailable(false)
                target_item.inCart +=1;
                target_item.itemQuantity -= 1;
                inCartNotify()
                setCart([...cart,target_item])

                //if the item is not found in the cart it gets one added to the amount in cart and one subtracted from the amount in inventory.
                //then it gets added to the cart.
            }else {
                setItemUnavailable(false)
                target_item.inCart +=1;
                target_item.itemQuantity -= 1;
                inCartNotify();
                console.log(target_item)
                //if it is already in the cart, the numbers are adjusted accordingly.
            }
        }
    }

    
    return (
        <div className='product-details-container'>
            <div className="item-path">
                <Link to='/shop'>Categories</Link> <p className="path-spacer"> -- </p><Link to={`/categories/${target_item.itemCategory}`}>{target_item.itemCategory}</Link><p className="path-spacer"> -- </p><Link to={`/categories/${target_item.itemCategory}/${target_item.name}`}>{target_item.name}</Link>
                </div>
            <div className="product-details-inner-container">
                <div className="product-details-info">
                    <h1>{target_item.name}</h1>
                    <img className="item-image" src={target_item.itemImg} alt=""/>
                    <p className="item-price">${target_item.itemPrice}</p>
                    <p className="product-description">Put product description here.</p>
                    <div className="product-detail-buttons">
                        {itemUnavailable ? <button 
                    className="out-of-stock"
                    onClick={addToCart}
                    >Out Of Stock</button> :     <button 
                    className="add-to-cart"
                    onClick={addToCart}
                    >Add to Cart</button>}
                    </div>
                </div>
                {/* product-details-info */}

                <ProductReviews
                    name={target_item.name}
                />
            </div>
            <RelatedProducts 
            category ={target_item.itemCategory}
            name={target_item.name}
                
                />
        </div>
    );
}

export default ProductDetails;

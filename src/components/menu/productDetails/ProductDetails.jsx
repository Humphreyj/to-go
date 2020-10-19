import React,{useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemContext from '../../../contexts/ItemContext';
import CartContext from '../../../contexts/CartContext';
import {ToastContainer, toast} from 'react-toastify';

import ProductReviews from './ProductReviews';

const ProductDetails = (props) => {
    const {shopInventory}=useContext(ItemContext)
    const{cart,setCart}=useContext(CartContext);
    let get_item = shopInventory.filter(item => props.match.params.item === item.name)
    let target_item = get_item[0]

    
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
                    <div className="prodcut-detail-buttons">
                        <button className="add-to-cart">Add To Cart</button>
                    </div>
                </div>
                {/* product-details-info */}

                <ProductReviews
                    name={target_item.name}
                />
            </div>
            
        </div>
    );
}

export default ProductDetails;

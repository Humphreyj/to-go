import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemContext from '../../../contexts/ItemContext';

const ProductDetails = (props) => {
    const {shopInventory}=useContext(ItemContext)
    console.log(props)
    let get_item = shopInventory.filter(item => props.match.params.item === item.name)
    let target_item = get_item[0]
    console.log(target_item)
    return (
        <div className='product-details-container'>
            <div className="product-details-info">
                <div className="item-path">
                    <Link to='/menu'>Categories</Link> <p className="path-spacer"> -- </p><Link to={`/categories/${target_item.itemCategory}`}>{target_item.itemCategory}</Link><p className="path-spacer"> -- </p><Link to='/menu'>{target_item.name}</Link>
                </div>
                
                <h1>{target_item.name}</h1>
                <img className="item-image" src={target_item.itemImg} alt=""/>
                <p className="item-price">${target_item.itemPrice}</p>
                <p className="product-description">Put prodcut description here.</p>
            </div>{/* product-details-info */}

            <div className="product-reviews">
                
            </div>
        </div>
    );
}

export default ProductDetails;

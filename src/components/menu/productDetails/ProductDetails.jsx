import React,{useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';

const ProductDetails = (props) => {
    const {shopInventory}=useContext(ItemContext)
    console.log(props)
    let get_item = shopInventory.filter(item => props.match.params.item === item.name)
    let target_item = get_item[0]
    console.log(target_item)
    return (
        <div>
            <h1>{target_item.name}</h1>
            <img src={target_item.itemImg} alt=""/>
            <p className="item-price">${target_item.itemPrice}</p>
            <p className="product-description">Put prodcut description here.</p>
        </div>
    );
}

export default ProductDetails;

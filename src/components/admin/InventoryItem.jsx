import React from 'react';
import '../../styles/admin/inventoryItem.scss';

const InventoryItem = (props) => {
    return (
        <div className='inventory-item'>
            <h4 className="inventory-item-name">{props.name}</h4>
            <h4 className="inventory-item-category">{props.category}</h4>
            <h4 className="inventory-item-price">{props.price}</h4>
            <h4 className="invetory-item-quantity">{props.quantity}</h4>
        </div>
    );
}

export default InventoryItem;

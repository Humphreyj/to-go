import React,{useState,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import EditItem from './EditItem';
import '../../styles/admin/inventoryItem.scss';

const InventoryItem = (props) => {
    const {shopInventory, setShopInventory}=useContext(ItemContext);

    const [editing, setEditing] = useState(false)

    const deleteItem = (id) => {
        setShopInventory(shopInventory.filter(item => item.id !== props.item.id))
    }

    return (
        <div className='inventory-item'>
            <div className="inventory-item-info">
                <h4 className="inventory-item-name">{props.name}</h4>
                <h4 className="inventory-item-category">{props.category}</h4>
                <h4 className="inventory-item-price">{props.price}</h4>
                <h4 className="invetory-item-quantity">{props.quantity} in stock</h4>
            </div>
            
            <div className="inventory-item-buttons">
                <button 
                onClick={()=>setEditing(true)}
                className="edit-inventory-item">Edit</button>
                <button
                onClick={()=>deleteItem(props.item.id)}
                 className="delete-inventory-item">Delete</button>
            </div>
            {editing ? 
            <EditItem
            item={props.item}
            editing={editing}
            setEditing={setEditing} /> 
            : ''}
        </div>
    );
}

export default InventoryItem;

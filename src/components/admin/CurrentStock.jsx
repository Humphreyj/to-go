import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import InventoryItem from './InventoryItem';
import '../../styles/admin/currentStock.scss';

const CurrentStock = () => {
    const {shopInventory} = useContext(ItemContext);
    const [showThis, setShowThis] = useState(shopInventory)
    const [displayInventory, setDisplayInventory]=useState(false);
    
    useEffect(() => {
        setShowThis(shopInventory)
        
    },[shopInventory])
    return (
        <div className='current-stock'>
            <button 
            className='inventory-toggle'
            onClick={()=>setDisplayInventory(!displayInventory)}>{displayInventory ? "Hide Inventory" : "View Your Inventory"}</button>
            <div className={displayInventory ? "inventory-container" : "hide"}>
                {showThis?.length === 0 ? <h4>Your inventory is empty.</h4> 
                : showThis?.map((item,i) => {
                    return (
                        <InventoryItem
                        key={i}
                        item={item}
                        name={item.name}
                        category={item.itemCategory}
                        price={item.itemPrice}
                        quantity={item.itemQuantity} 
                        />
                    )
                }) }
            </div>
        
            
        </div>
    );
}

export default CurrentStock;

import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import InventoryItem from './InventoryItem';

const CurrentStock = () => {
    const {shopInventory} = useContext(ItemContext);
    const [showThis, setShowThis] = useState(shopInventory)
    console.log(shopInventory)
    useEffect(() => {
        setShowThis(shopInventory)
        
    },[shopInventory])
    return (
        <div>
            {showThis?.length === 0 ? <h4>Your inventory is empty.</h4> 
            : showThis?.map(item => {
                return (
                    <InventoryItem
                    name={item.name}
                    category={item.itemCategory}
                    price={item.itemPrice}
                    quantity={item.itemQuantity} 
                    />
                )
            }) }
            
        </div>
    );
}

export default CurrentStock;

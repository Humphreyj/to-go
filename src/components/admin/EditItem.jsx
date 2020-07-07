import React,{useState,useContext,useEffect} from 'react';
import ItemContext from '../../contexts/ItemContext';

const EditItem = (props) => {
    const [itemToEdit, setItemToEdit]=useState(props.item)

    const {shopInventory,setShopInventory,shopCategories} = useContext(ItemContext)
    const [showCats, setShowCats]= useState([shopCategories])

    

    const changeHandler = (e) => {
        setItemToEdit({...itemToEdit,[e.target.name]: e.target.value})
        console.log(itemToEdit)
    }
    useEffect(() => {
        setShowCats([...shopCategories])
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        setShopInventory(shopInventory.map(item => {
            if(item.name === props.item.name) {
                console.log(item)
            }
        }))
        
    }
    console.log(itemToEdit)
    return (
        <div className='add-item'>
            <h4>Add an item to your store here.</h4>
            <form onSubmit={submitHandler}>
                <div className="item-info">
                    <div className="item-name input-block">
                        <label htmlFor="itemName">Item Name</label>
                        <input 
                        type="text"
                        name='name'
                        value={itemToEdit.name}
                        required
                        onChange={changeHandler}
                        />
                    </div>
                    {/* <div className="item-image input-block">
                        <label htmlFor="itemImage">Item Image</label>
                        <input type="file"/>
                    </div> */}
                </div>            
                <div className="item-stock-info">
                    <div className='input-block'>
                        <label htmlFor="itemCategory">Category</label>
                        <select 
                        name="itemCategory" 
                        id="cats" 
                        value={itemToEdit.itemCategory}
                        onChange={changeHandler}
                        required>
                            
                    {showCats.map(item => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })}

        </select>
                    </div>
                   
                    <div className='input-block'>
                        <label htmlFor="itemPrice">Price</label>
                        <input 
                        name='itemPrice'
                        value={itemToEdit.itemPrice}
                        type="number"
                        onChange={changeHandler}
                        required
                        />
                    </div>
                </div>
                <div className='input-block'>
                        <label htmlFor="itemQuantity">Quantity</label>
                        <input 
                        name='itemQuantity'
                        value={itemToEdit.itemQuantity}
                        type="number"
                        onChange={changeHandler}
                        required
                        />
                    </div>
                <button>Add Item</button>
            </form>
            
        </div>
    );
}

export default EditItem;

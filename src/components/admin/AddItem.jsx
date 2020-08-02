import React,{useState,useEffect, useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import Categories from './Categories';
import '../../styles/admin/addItem.scss';

const AddItem = () => {
    const {shopInventory,setShopInventory,shopCategories} = useContext(ItemContext)
    const [showCats, setShowCats]= useState([shopCategories])
    const [addingItem, setAddingItem] =useState(false)
    const [newItem, setNewItem]=useState({
        id: Math.random(),
        name: '',
        // itemImage:'',
        itemCategory: '',
        itemPrice: 0,
        itemQuantity: 0,
        collection: '',
        inCart: 0,
    })
    useEffect(() => {
        setShowCats([...shopCategories])
    }, [shopCategories])
    const changeHandler = (e) => {
        setNewItem({...newItem,[e.target.name]: e.target.value})
        console.log(newItem)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(newItem.itemCategory === '') {
            alert('Please select a category.')
        }else {
            setShopInventory([...shopInventory, newItem])
            console.log(shopInventory)
            setNewItem({
                id: Math.random(),
                name: '',
            // itemImage:'',
            itemCategory: '',
            itemPrice: 0,
            itemQuantity: 0,
            collection:'',
            inCart: 0
        })
        }
    
    }
    return (
        <div className='add-item'>
            <button className='add-item-toggle' onClick={()=>setAddingItem(!addingItem)}>{addingItem ? "All Done" : "Add an item to your store."}</button>
            <form className={addingItem ? 'add-item-form' : 'hide'} onSubmit={submitHandler}>
                <div className="item-info">
                    <div className="item-name input-block">
                        <label htmlFor="itemName">Item Name</label>
                        <input 
                        type="text"
                        name='name'
                        value={newItem.name}
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
                        value={newItem.itemCategory}
                        onChange={changeHandler}
                        required>
                            <option value="">None</option>
           {showCats.length > 0 ? showCats.map((item,i) => {
               return (
                   <option key={i} value={item}>{item}</option>
               )
           }) : <option value="none">No Categories</option> }

        </select>
                    </div>
                   
                    <div className='input-block'>
                        <label htmlFor="itemPrice">Price</label>
                        <input 
                        name='itemPrice'
                        value={newItem.itemPrice}
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={changeHandler}
                        required
                        />
                    </div>
                </div>
                <div className='input-block'>
                        <label htmlFor="itemQuantity">Quantity</label>
                        <input 
                        name='itemQuantity'
                        value={newItem.itemQuantity}
                        type="number"
                        min='1'
                        step='1'
                        onChange={changeHandler}
                        required
                        />
                    </div>
                <button>Add Item</button>
            </form>
            
        </div>
    );
}

export default AddItem;

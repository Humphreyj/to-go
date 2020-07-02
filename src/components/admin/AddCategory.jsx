import React,{useState,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';


const AddCategory = () => {
    const {shopCategories, setShopCategories} = useContext(ItemContext);
    const [newCategory, setNewCategory] = useState('');
    

    const changeHandler = e => {
        setNewCategory(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        if(shopCategories.indexOf(newCategory) !== -1) {
            alert('This category already exisits.')
            return
        }
        if(newCategory === '') {
            alert('You need to create a category to proceed.')
        }else {
            setShopCategories([...shopCategories, newCategory])
            setNewCategory('')
        }
        
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                placeholder='Add Category'
                name='newCategory'
                value={newCategory}
                onChange={changeHandler}
                type="text"/>
                <button>Add</button>
            </form>
            
        </div>
    );
}

export default AddCategory;

import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';

const Categories = (props) => {
    const {shopCategories}=useContext(ItemContext)
    const [showCats, setShowCats]= useState([shopCategories])
    useEffect(() => {
        setShowCats([...shopCategories])
    }, [shopCategories])
    return (
        <select name="categories" id="cats" value={props.newItem.itemCategory}>
           {showCats.length > 0 ? showCats.map(item => {
               return (
                   <option value={item}>{item}</option>
               )
           }) : <option value="none">No Categories</option> }

        </select>
    );
}

export default Categories;

import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/menu/categories.scss'


const Categories = (props) => {
    const {shopCategories}=useContext(ItemContext);
    return (
        <div className='menu-categories'
        onMouseLeave={()=> props.setCatsAreVisible(false)}
        >
            {shopCategories.map((category,i) => {
                return (
                <p
                key={i}
                className='menu-category'
                onClick={()=>props.filterMenu(category)}
                >{category}</p>
                )
            })}
            
        </div>
    );
}

export default Categories;

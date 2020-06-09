import React,{useState, useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';


const Veggies = (props) => {
    const {veggieList} =useContext(ItemContext);
    const [veggies,setVeggies] =useState(veggieList)
    return (
        <div className='category veggie'>
            {veggies?.map(veggie => {
                return ( 
                    <Product
                    name={veggie.name}
                    price={veggie.price}
                    img={veggie.img}
                    item={veggie}
                    
                    />
                )
            })}
            
        </div>
    );
}

export default Veggies;

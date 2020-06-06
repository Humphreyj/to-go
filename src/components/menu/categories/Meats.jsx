import React,{useState,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';

const Meats = () => {
    const {meatList}=useContext(ItemContext)
    const [meats,setMeats]=useState(meatList)
    return (
        <div className='meats category'>
            {meats?.map(meat => {
                return (
                    <Product 
                     name={meat.name}
                     price={meat.price}
                     img={meat.img}
                    />
                )
            })}
        </div>
    );
}

export default Meats;

import React,{useState,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';

const Fruit = () => {
    const {fruitList} =useContext(ItemContext)
    const [fruit,setFruit] = useState(fruitList);
    return (
        <div className='category fruit'>
            {fruit?.map(fruit => {
                return ( 
                    <Product 
                    name={fruit.name}
                    price={fruit.price}
                    img={fruit.img}
                    item={fruit}
                    />
                )
            })}
        </div>
    );
}

export default Fruit;

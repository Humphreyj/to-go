import React,{useState,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';

const Fruit = () => {
    const {fruitList} =useContext(ItemContext)
    const [fruits,setFruit] = useState(fruitList);
    return (
        <div className='category fruit'>
            {fruits?.map(fruit => {
                return ( 
                    <Product 
                    name={fruit.name}
                    price={fruit.price}
                    img={fruit.img}
                    item={fruit}
                    data={fruits}
                    function={setFruit}
                    />
                )
            })}
        </div>
    );
}

export default Fruit;

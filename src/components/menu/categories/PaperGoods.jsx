import React,{useState, useEffect,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';


const PaperGoods = () => {
    const {paperGoodsList} = useContext(ItemContext)
    const [paper,setPaper]=useState(paperGoodsList);
    
    return (
        <div className='category paper'>
            {paper?.map(paperGood => {
                return (
                    <Product
                    img={paperGood.img}
                    name={paperGood.name}
                    price={paperGood.price}
                    item={paperGood}
                     />
                )
            })}
        </div>
    );
}

export default PaperGoods;

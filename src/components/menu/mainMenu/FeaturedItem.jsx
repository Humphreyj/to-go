import React,{useState,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';
import '../../../styles/menu/featuredItem.scss';
const FeaturedItem = () => {
    const {masterList} =useContext(ItemContext)
    let index = Math.floor(Math.random() * Math.floor(masterList.length))
    const [featuredItem, setFeaturedItem] = useState(masterList[index])

    let salePrice = featuredItem.price - featuredItem.price * .2;
    return (
        <div className='featured'>
            <h4>Check out this great Item!</h4>
            <img src={featuredItem.img} alt={featuredItem.name}/>
            <div className="featured-item-info">
            <h4 className="featured-item-name">{featuredItem.name}</h4>
            <h4 className="featured-item-price">{featuredItem.price}</h4>
            </div>
            
            
        </div>
    );
}

export default FeaturedItem;

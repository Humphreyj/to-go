import React,{useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import Product from '../../utils/Product';

const Collection = (props) => {
    const {shopInventory,shopCollections}=useContext(ItemContext)
    let target_collection = props.match.params.collection
    let menu_by_collection = shopInventory.filter(item => target_collection === item.collection )
    console.log(menu_by_collection)
    return (
        <div className='collection-div'>
            <div className="collection-info">
                {shopCollections.map(collection => {
                    if (collection.name == target_collection) {
                    return( <img className='target_collection_image' src={collection.img} alt=""/>)
                    }
                })}
            <h3 className="target_collection">{target_collection}</h3>
            </div>
            

            <div className="collection-items">
                {menu_by_collection.map((item,i) => {
                    return (
                        <Product
                        key={i}
                        itemImg={item.itemImg}
                        item={item}
                        name={item.name}
                        price={item.itemPrice}
                        category={item.itemCategory}
                         />
                    )
                })}
            </div>
        </div>
    );
}

export default Collection;

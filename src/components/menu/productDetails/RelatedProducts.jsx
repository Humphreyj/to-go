import React,{useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Product from '../../../utils/Product';

const RelatedProducts = (props) => {
    const {shopInventory}=useContext(ItemContext)
    let categoryArray = shopInventory.filter(item => item.itemCategory === props.category)
    let relatedProductArray = categoryArray.filter(item =>item.name !== props.name).slice(0,3)
    console.log(relatedProductArray)
    return (
        <div className="related-products-container">
            <h4 className="related-products-heading">You may also like:</h4>
            <div className="related-products">
                {relatedProductArray.map((item,i) => {
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

export default RelatedProducts;

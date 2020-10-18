import React,{useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import Product from '../../utils/Product';

const Category = (props) => {
    const {shopInventory,shopCategories}=useContext(ItemContext)
    let target_category = props.match.params.category
    
    let menu_by_category = shopInventory.filter(item => target_category === item.itemCategory )
    console.log(menu_by_category)
    return (
        <div className='category-main'>
            <div className="category-info">
                <h3>{target_category}</h3>
            </div>

            <div className="category-items">
                {menu_by_category.map((item,i) => {
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

export default Category;

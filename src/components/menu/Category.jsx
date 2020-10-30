import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import ItemContext from '../../contexts/ItemContext';
import Product from '../../utils/Product';

const Category = (props) => {
    const {shopInventory,shopCategories}=useContext(ItemContext)
    let target_category = props.match.params.category
    
    let menu_by_category = shopInventory.filter(item => target_category === item.itemCategory )
    console.log(menu_by_category)
    return (
        <div className='category-main'>
            <div className="category-path">
                    <Link to='/shop'>Categories</Link> <p className="path-spacer"> -- </p><Link to={`/categories/${target_category}`}>{target_category}</Link>
                </div>
            <div className="category-info">
            {shopCategories.map(category => {
                    if (category.name === target_category) {
                    return( <img className='target_category_image' src={category.img} alt=""/>)
                    }
                })}
                <h3 className='target_category_name'>{target_category}</h3>
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

import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import '../../styles/admin/orders.scss';
const Orders = () => {
    const [inStock,setInstock] = useState(false);
    const {shopOrders} =useContext(ItemContext);
    useEffect(() => {
        console.log(shopOrders)
    })
    return (
        <div className='orders'>
            {shopOrders.length > 0 ? shopOrders.map(order => {
                return (
                    <div className="order">
                       { order.map(orderItem => {
                           return (
                               <div className="order-item">
                                   <p>{orderItem.name}</p>
                                   <p className="amount-ordered">{orderItem.inCart} ordered</p>
                                   <p className="amount-in-stock">{orderItem.itemQuantity} in stock</p>
                                   
                               </div>
                           )
                        })}
                    </div>
                )
            }) : <h1 className='no-orders'>You Currently Have No Orders</h1>}
            
        </div>
    );
}

export default Orders;

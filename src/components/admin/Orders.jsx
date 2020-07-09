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
        <div>
            {shopOrders.map(order => {
                return (
                    <div className="order">
                       { order.map(orderItem => {
                           return (
                               <div className="order-item">
                                   <p>{orderItem.name}</p>
                                   <p className="amount-ordered">{orderItem.inCart} ordered</p>
                               </div>
                           )
                        })}
                    </div>
                )
            })}
            <h1>You Have No Orders</h1>
        </div>
    );
}

export default Orders;

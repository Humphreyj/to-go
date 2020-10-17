import React from 'react';
import {Route} from 'react-router-dom';
import Splash from '../../components/home/Splash';
import Menu from '../../components/menu/mainMenu/Menu';
import Collections from '../../components/menu/mainMenu/Collections'
import Collection from '../../components/menu/Collection';
import AdminDashboard from '../../components/admin/AdminDashboard';
import Cart from '../../components/cart/Cart';


const Routes = props => {
    return (
        <>
            <Route exact path='/' component={Splash} />
            <Route path='/menu' component={Menu} />
            <Route exact path='/collections' component={Collections} />
            <Route path='/collections/:collection' component={Collection} />
            <Route path='/cart' component={Cart} />
            <Route path='/admin' component={AdminDashboard} />

            
        </>
    )
}

export default Routes;
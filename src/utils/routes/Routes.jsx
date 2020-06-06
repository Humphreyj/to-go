import React from 'react';
import {Route} from 'react-router-dom';
import Splash from '../../components/home/Splash';
import Menu from '../../components/menu/mainMenu/Menu';
import Cart from '../../components/cart/Cart';


const Routes = props => {
    return (
        <>
            <Route exact path='/' component={Splash} />
            <Route path='/menu' component={Menu} />
            <Route path='/cart' component={Cart} />
            
        </>
    )
}

export default Routes;
import React from 'react';
import {Route,Link} from 'react-router-dom';
import PaperGoods from '../categories/PaperGoods';
import Fruit from '../categories/Fruit';
import Veggies from '../categories/Veggies';
import Meats from '../categories/Meats';
import '../../../styles/menu/menu.scss'
const Menu = () => {
    return (
        <div className='main-menu'>
            <h4>Here is our menu.</h4>
            <div className="menu-navigation">
                <Link to='/menu/paper'>Paper</Link>
                <Link to='/menu/fruit'>Fruit</Link>
                <Link to='/menu/veggies'>Vegetables</Link>
                <Link to='/menu/meats'>Meats</Link>
            </div>

            <Route path='/menu/paper' component={PaperGoods} />
            <Route path='/menu/fruit' component={Fruit} />
            <Route path='/menu/veggies' component={Veggies} />
            <Route path='/menu/meats' component={Meats} />
        </div>
    );
}

export default Menu;

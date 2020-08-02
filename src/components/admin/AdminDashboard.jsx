import React from 'react';
import AddItem from './AddItem';
import AddCategory from './AddCategory';
import CurrentStock from './CurrentStock';
import Orders from './Orders';
import '../../styles/admin/adminDashboard.scss'

const AdminDashboard = () => {
    return (
        <div className='admin-dash'>
            <h1 className='welcome-text'>Welcome, Admin!</h1>
            <Orders />
            <CurrentStock />
            <AddCategory />
            <AddItem />
        </div>
    );
}

export default AdminDashboard;

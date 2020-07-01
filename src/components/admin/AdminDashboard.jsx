import React from 'react';
import AddItem from './AddItem';
import AddCategory from './AddCategory';
import CurrentStock from './CurrentStock';
import '../../styles/admin/adminDashboard.scss'

const AdminDashboard = () => {
    return (
        <div className='admin-dash'>
            <h1>Welcome, Admin!</h1>
            <CurrentStock />
            <AddCategory />
            <AddItem />
            messages
        </div>
    );
}

export default AdminDashboard;

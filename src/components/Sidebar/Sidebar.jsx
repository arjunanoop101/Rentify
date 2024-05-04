import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className='sidebar-option'>
                <Link to="/Add"> <p>Add Items</p></Link>
            </div>
            <div className='sidebar-option'>
            <Link to='/List'><p>List Items</p></Link>  
            </div>
            <div className='sidebar-option'>
               <Link to="/MyOrders"> <p>Order</p></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar

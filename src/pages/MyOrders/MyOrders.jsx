import React,{useContext}from 'react'
import './MyOrders.css'
import {StoreContext} from '../../context/StoreContext'
import Sidebar from '../../components/Sidebar/Sidebar'
import { assets } from '../../assets/assets'
import orderpng from '../../assets/order.png'
const MyOrders = () => {

  const{productList}=useContext(StoreContext)

  return (
    <div className='my-orders'>
    <Sidebar/>
    <div className="order">
      <div>
        <h4>Order Page</h4>
      </div>
      <div className="order-list">
      {productList.map((item,index)=>{
            return(
              <div>
                <div className="order-image">
                  <img src={orderpng} alt="" />
                </div>
                <div key={index} className='list-items'>
                  <p>{item.productName}</p>
                </div>
              </div>  
            )
          })}
      </div>
    </div>
    </div>
  )
}

export default MyOrders

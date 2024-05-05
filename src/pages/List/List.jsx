import React, { useContext } from 'react'
import './List.css'
import {StoreContext} from '../../context/StoreContext'
import Sidebar from '../../components/Sidebar/Sidebar'
const List = () => {

  const{product_list}=useContext(StoreContext)
  return (
    <div className='list'>
      <Sidebar/>
      <div className='table'>
        <div className='list-item flex-col'>
          <p>Product List</p>
        </div>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {product_list.map((item,index)=>{
            return(
              <div key={index} className='list-table-format'>
                <img src={item.image} alt=""/>
                <p>{item.name}</p>
                <p>{item.catogory}</p>
                <p>{item.price}</p>
                <p>X</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default List

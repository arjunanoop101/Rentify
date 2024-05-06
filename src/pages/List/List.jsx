import React, { useContext } from 'react'
import './List.css'
import {StoreContext} from '../../context/StoreContext'
import Sidebar from '../../components/Sidebar/Sidebar'
const List = () => {

  const{productList}=useContext(StoreContext)
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
          {productList.map((item,index)=>{
            return(
              <div key={index} className='list-table-format'>
                <img src={item.img} alt=""/>
                <p>{item.productName}</p>
                <p>{item.productCategory}</p>
                <p>{item.productPrice}</p>
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

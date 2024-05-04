import React from 'react'
import './Product.css'
import ProductItem from '../../components/ProductItem/ProductItem'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { useState } from 'react'

const Product = () => {
  const {product_list} = useContext(StoreContext);
  const [catogory,setCatogory] = useState("All");
  return (
    <div className='product-display' id='product-display'>
    <h1>All products </h1>
    <div className='product-display-list'>
      {product_list.map((item,index)=>{
        
        if(catogory==="All" || catogory===item.catogory){

          return(
              <ProductItem key ={index} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price}/>
          )
        }
      
        
      })}
    </div>
  </div>
  )
}

export default Product

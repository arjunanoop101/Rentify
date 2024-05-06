import React, { useContext, useEffect } from 'react'
import './ProductItem.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../../context/StoreContext'
const ProductItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,productList} =useContext(StoreContext);
 
  

  useEffect(()=>{
    if(!cartItems[id]){
      removeFromCart(id);
    }
  },[])
  
  return (
    <div className='product-item'>
      <div className="product-item-image-container">
        <img className='product-item-image' src={image}  />
       
      </div>
        <div className='plus-icon'>
          
          
          {cartItems[id]==0?<FontAwesomeIcon onClick={()=>addToCart(id)} icon={faPlus} size='xl'/> : <><p>Item Added</p><FontAwesomeIcon onClick={()=>removeFromCart(id)} icon={faXmark} size='xl'/></>}
        
        </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
            <p>{name}</p>
        </div>
        <p className="product-item-description">
            {description}
        </p>
        <p className='product-item-price'>{price}</p>
      </div>
    </div>
  )
}

export default ProductItem

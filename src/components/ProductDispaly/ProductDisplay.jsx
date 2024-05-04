import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem';

import { Link } from 'react-router-dom';

const ProductDisplay = ({catogory}) => {
    const {product_list} = useContext(StoreContext);

  return (
    <div className='product-display' id='product-display'>
      <h1>Our Products </h1>
      <Link to='/all'><button className='show-more'>Show more</button></Link>
      <div className='product-display-list'>
        {product_list.map((item,index)=>{
          if(index<8){
          if(catogory==="All" || catogory===item.catogory){

            return(
                <ProductItem key ={index} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price}/>
            )
          }
        }
          
        })}
      </div>
    </div>
  )
}

export default ProductDisplay

import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const { cartItems, product_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {product_list.map((item, index) => {

          if (cartItems[item.id] > 0) {
            return (
              <>
                <div key={index} className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>${item.price}</p>
                  <p onClick={()=>removeFromCart(item.id)}className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart

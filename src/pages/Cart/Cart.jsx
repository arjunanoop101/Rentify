import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router';

import { StoreContext } from '../../context/StoreContext'
import { collection, getDocs } from 'firebase/firestore';
import { productDB } from '../../firebase';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, getTotalCartAmount } = useContext(StoreContext);
    const {removeFromCart} =useContext(StoreContext);
    const [fetchedProductList, setFetchedProductList] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const productRef = collection(productDB, 'products');
                const snapshot = await getDocs(productRef);
                const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setFetchedProductList(productList);
            } catch (error) {
                console.error('Error fetching product data: ', error);
            }
        };

        fetchProductData();
    }, []);

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

                {fetchedProductList.map((item, index) => {
                    if (cartItems[item.id]===1) {
                      console.log(cartItems[item.id]);
                      console.log(item.name)
                      console.log(item.image);
                        return (
                            <div key={index} className='cart-items-title cart-items-item'>
                                <img src={item.img} alt="" />
                                <p>{item.productName}</p>
                                <p>${item.productPrice}</p>
                                <p>${item.productPrice}</p>
                                <p onClick={() => removeFromCart(item.id)} className='cross'>x</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? getTotalCartAmount() : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

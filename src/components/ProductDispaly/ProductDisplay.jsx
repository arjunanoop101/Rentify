import React, { useContext, useState, useEffect } from 'react';
import './ProductDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import { collection, getDocs } from 'firebase/firestore';
import { productDB } from '../../firebase';

import { Link } from 'react-router-dom';

const ProductDisplay = ({ catogory }) => {
    // const { product_list } = useContext(StoreContext);
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
    }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

    return (
        <div className='product-display' id='product-display'>
            <h1>Our Products </h1>
            <Link to='/all'><button className='show-more'>Show more</button></Link>
            <div className='product-display-list'>
                {fetchedProductList.map((item, index) => {
                    if (index < 8) {
                        if (catogory === "All" || catogory === item.productCategory) {
                            return (
                                <ProductItem key={index} id={item.id} name={item.productName} image={item.img} description={item.productDescription} price={item.productPrice} />
                            )
                        }
                    }
                })}
            </div>
        </div>
    );
}

export default ProductDisplay;

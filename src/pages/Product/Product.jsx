import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link component
import './Product.css';
import ProductItem from '../../components/ProductItem/ProductItem';
import { collection, getDocs } from 'firebase/firestore';
import { productDB } from '../../firebase';

const Product = () => {
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
        <div className='product-display' id='product-display'>
            <h1>Our Products</h1>
            {/* <Link to='/all'><button className='show-more'>Show more</button></Link> */}
            <div className='product-display-list'>
                {fetchedProductList.map((item, index) => (
                    <ProductItem key={index} id={item.id} name={item.productName} image={item.img} description={item.productDescription} price={item.productPrice} />
                ))}
            </div>
        </div>
    );
}

export default Product;

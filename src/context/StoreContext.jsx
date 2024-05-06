import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { productDB } from "../firebase";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const productRef = collection(productDB, "products");
                const snapshot = await getDocs(productRef);
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProductList(products);
            } catch (error) {
                console.error("Error fetching product data: ", error);
            }
        };

        fetchProductData();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const item = productList.find((product) => product.id === itemId);
            if (cartItems[itemId] > 0) {
                totalAmount += item.price;
            }
        }
        return totalAmount;
    };

    const contextValue = {
        productList,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

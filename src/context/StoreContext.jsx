import { createContext, useContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider =(props)=> {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if(cartItems[itemId]==0){
            setCartItems((prev)=>({...prev,[itemId]:1}));
            console.log("add to cart called");
        }
    }

    const removeFromCart = (itemId) =>{
        
            setCartItems((prev)=>({...prev,[itemId]:0}));
            console.log("remove from cart called");
        
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems )
        {
            if(cartItems[item] > 0){

                let itemInfo = product_list.find((product)=>product.id===item);
                totalAmount += itemInfo.price;
            }
        }
        return totalAmount
    }
    
    

    const contextValue = {
        product_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount
        
        
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;

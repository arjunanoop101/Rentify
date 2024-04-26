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

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    
    

    const contextValue = {
        product_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;

import React, { createContext, useState } from 'react'
import all_product from '../Components/Assest/all_product'

export const ShopContext = createContext(null)
const CartDefault = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
         cart[index]= 0
    }
    return cart
}

const ShopProvider = (props) => {
    const [cartelement, setCartelement] = useState(CartDefault())


    const AddToCart=(itemId)=>{
        setCartelement((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartelement)
    }

    const RemovFromCart=(itemId)=>{
        setCartelement((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalamount = 0;
        for(const item in cartelement)
        if (cartelement[item]>0) {
            const itemInfo = all_product.find((product)=>product.id===Number(item))
            totalamount += itemInfo.new_price * cartelement[item]
        }
        return totalamount;
    }
    const CartItemsList = () =>{
        let totalitem = 0;
        for(const item in cartelement)
        if (cartelement[item]>0) {
            totalitem += cartelement[item]
        }
        return totalitem
    }


    const ContextValue = {all_product,cartelement,AddToCart,RemovFromCart,getTotalCartAmount,CartItemsList}
    
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopProvider;

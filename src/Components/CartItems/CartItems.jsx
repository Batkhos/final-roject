import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'

export default function CartItems() {
    const {all_product,cartelement,RemovFromCart,AddToCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <h1>Welcome in Your Cart List</h1>
         {all_product.map((e)=>{
            if (cartelement[e.id] > 0)
            {
                return(
                    <>
                     <div className='cart'>
                        <img src={e.image} alt="" />
                        <p><span>Product</span> : {e.name}</p>
                        <p><span>Descpition</span> : {e.disc}</p>
                        <p><span>Price</span> : {e.new_price} DH</p>
                        <h5><span>Quantity</span> : {cartelement[e.id]} </h5>
                        <button onClick={()=>{RemovFromCart(e.id)}}>-</button><button onClick={()=>{AddToCart(e.id)}}>+</button>
                        <p><span>Total</span> = {e.new_price * cartelement[e.id]}DH</p>
                    </div>
                        
                    </>
                   
                )   
               }
            })}
               <h1>Total : {getTotalCartAmount()}DH</h1>

    </div>
  )
}

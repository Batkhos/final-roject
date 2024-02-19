import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'

export default function Navbar() {
  const [menu , setMenu] = useState('Shop')
  const {CartItemsList} = useContext(ShopContext)
  return (
    <div class="flex justify-around p-4 shadow-md bg-gray-600">
        <div class="flex items-center gap-3 ">
            <img class="w-16" src="https://static.vecteezy.com/system/resources/thumbnails/008/926/067/small/az-logo-creative-modern-minimal-alphabet-a-z-initial-letter-mark-monogram-editable-in-format-vector.jpg" alt="" />
            <p class="text-4xl font-bold">AZ Shop</p>
        </div>
        <ul class="flex items-center list-none gap-12 text-xl	 font-medium">
            <li class="flex flex-col items-center justify-center gap-0 cursor-pointer" onClick={()=>{setMenu('Shop')}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Shop</Link>{menu === 'Shop' ? <hr class="border-none w-10 h-1 rounded-xl bg-red-700"/> : <></> }</li>
            <li class="flex flex-col items-center justify-center gap-0 cursor-pointer" onClick={()=>{setMenu('Men')}}><Link style={{textDecoration:'none',color:'black'}} to='/mens'>Men</Link>{menu === 'Men' ? <hr class="border-none w-10 h-1 rounded-xl bg-red-700"/> : <></> }</li>
            <li class="flex flex-col items-center justify-center gap-0 cursor-pointer" onClick={()=>{setMenu('Women')}}><Link style={{textDecoration:'none',color:'black'}} to='/womens'>Women</Link>{menu === 'Women' ? <hr class="border-none w-10 h-1 rounded-xl bg-red-700"/> : <></> }</li>
            <li class="flex flex-col items-center justify-center gap-0 cursor-pointer" onClick={()=>{setMenu('Kids')}}><Link style={{textDecoration:'none',color:'black'}} to='/kids'>Kids</Link>{menu === 'Kids' ? <hr class="border-none w-10 h-1 rounded-xl bg-red-700"/> : <></> }</li>
        </ul>
        <div class="flex items-center ">
        <Link to='login'><button class="w-28 border-2 border-black h-10 gap-5 font-medium mr-2 rounded-2xl bg-slate-400  hover:bg-white active:bg-white focus:bg-white" onClick={()=>{setMenu('Log In')}} className='log-in' >Log In</button></Link>
        <Link to="cart" aria-label="Shopping Cart"><svg class="transition h-5 text-black  hover:text-blue-500 " onClick={() => setMenu('cart')}
            viewBox="0 0 576 512" fill="currentColor"><path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>
        <div class="flex h-4 w-4 font-bold rounded-full text-xs justify-center items-center bg-red-600 mb-4 mr-2 ">{CartItemsList()}</div>
        </div>
    </div>
  )
}

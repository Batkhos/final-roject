import React, { useState , useContext} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'

export default function Navbar() {
  const [menu , setMenu] = useState('Shop')
  const {CartItemsList} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/926/067/small/az-logo-creative-modern-minimal-alphabet-a-z-initial-letter-mark-monogram-editable-in-format-vector.jpg" alt="" />
            <p>AZ Shop</p>
        </div>
        <ul className='list'>
            <li onClick={()=>{setMenu('Shop')}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Shop</Link>{menu === 'Shop' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('Men')}}><Link style={{textDecoration:'none',color:'black'}} to='/mens'>Men</Link>{menu === 'Men' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('Women')}}><Link style={{textDecoration:'none',color:'black'}} to='/womens'>Women</Link>{menu === 'Women' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('Kids')}}><Link style={{textDecoration:'none',color:'black'}} to='/kids'>Kids</Link>{menu === 'Kids' ? <hr/> : <></> }</li>
        </ul>
        <div className='btn'>
        <Link to='login'><button onClick={()=>{setMenu('Log In')}} className='log-in' >Log In</button></Link>
        <Link to='cart'><i onClick={()=>{setMenu('cart')}} class="fa-solid fa-cart-shopping"></i></Link> 
        <div className="num">{CartItemsList()}</div>
        </div>
    </div>
  )
}

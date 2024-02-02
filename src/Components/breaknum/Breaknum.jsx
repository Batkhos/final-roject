import React from 'react'
import './Breaknum.css'

export default function Breaknum(props) {
    const {product} = props;
  return (
    <div className='Breaknum'>
        Home <i class="fa-solid fa-angle-right"></i>
        Shop <i class="fa-solid fa-angle-right"></i>
        {product.category} <i class="fa-solid fa-angle-right"></i>
        {product.name}
    </div>
  )
}

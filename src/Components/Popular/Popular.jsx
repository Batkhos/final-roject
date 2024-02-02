import React from 'react'
import data_product from '../Assest/Data'
import './Popular.css'
import Item from '../items/Item'

export default function Popular() {
  return (
    <div className='popular'>
        <h1>PUPOLAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,prod)=>{
                return(
                    <Item key={prod} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                )
            })}
        </div>
    </div>
  )
}

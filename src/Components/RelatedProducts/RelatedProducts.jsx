import React from 'react'
import './RelatedProducts.css'
import Item from '../items/Item'
import data_product  from '../Assest/Data'


export default function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Taletd Products</h1>
      <hr />
      <div className='relatedproducts-item'>
      {data_product.map((item,prod)=>{
                return(
                    <Item key={prod} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                )
            })}
      </div>
    
    </div>
  )
}

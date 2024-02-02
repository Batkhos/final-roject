import React from 'react'
import'./NewCollection.css'
import Item from '../items/Item'
import new_collection from '../Assest/New_collection'

export default function NewCollection() {
  return (
    <div className='new-co'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collection'>
        {new_collection.map((item , prod)=>{
           return(
            <Item key={prod} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           )         
          })}
      </div>

    </div>
  )
}

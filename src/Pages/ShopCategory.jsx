import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import Item from '../Components/items/Item'

export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='banner' src={props.banner} alt="" />
      <div className='indexSort'>
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className='sort'> 
          sort by <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className='shop-products'>
      {all_product.map((item,e)=>{
       if (props.category === item.category) {
        return <Item key={e} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      }else{
        return null
      }
      })}
      </div>
      <div className="loadmore">
        <p>Explore More</p>
      </div>
    </div>
  )
}

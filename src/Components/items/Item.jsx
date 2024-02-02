import React from 'react'
import { Link } from 'react-router-dom'
import './ItemStyle.css'

export default function Item(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt="" /> </Link>
        <p>{props.name}</p>
        <div className='item-price'>
            <div className='item-new-price'>
                {props.new_price}DH
            </div>
            <div className='item-old-price'>
                {props.old_price}DH
            </div>
        </div>
    </div> 
  )
}

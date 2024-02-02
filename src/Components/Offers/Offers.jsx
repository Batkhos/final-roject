import React from 'react'
import girl55 from '../Assest/girl55.png'
import './OfferStyle.css'

export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='check'>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={girl55} alt="" />
        </div>
    </div>
  )
}

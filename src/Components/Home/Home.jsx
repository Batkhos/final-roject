import React from 'react'
import './HomeStyle.css'
import pic from '../Assest/pic.png'

export default function Home() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Club's Tools </h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>    
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <dir>Lestet Collection</dir>
            </div>
        </div>
        <div className="hero-right">
            <img src={pic} alt="" /> 
        </div>
    </div>
  )
}

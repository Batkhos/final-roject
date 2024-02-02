import React from 'react'
import './NewLetter.css'

export default function NewLetter() {
  return (
    <div className='newletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email ' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

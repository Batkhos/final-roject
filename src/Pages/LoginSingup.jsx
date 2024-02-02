import React from 'react'
import './CSS/LoginSingup.css'

export default function LoginSingup() {
  return (
    <div className='loginsingup'>
      <div className='singup'>
        <h1>Sing Up</h1>
        <div className='singup-table'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder= 'Your Password' />
        </div>
        <button className='creat-acc'> Create Account </button>
        <p className='sing-up-text'>Aleardy have an account? <span> login Here</span></p>
        <div className='singup-agree'>
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
 
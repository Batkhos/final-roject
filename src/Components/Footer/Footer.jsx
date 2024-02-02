import React from 'react'
import './Footer.css'
import Logo from '../Assest/Logo.jpg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Logo} alt="" />
            <p>AZ Shop</p>
        </div>
        <ul className="foooter-links">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
               <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
        </div>
        <div className='footer-copyright'>
            <p>© 2000-2023 CGP Holdings, Inc. All Rights Reserved.</p>
        </div>
    </div>
  )
}

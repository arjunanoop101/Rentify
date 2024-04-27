import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="Rentify" />
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-conten-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+(91) 8590985254</li>
                    <li>arjunanoop101@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* <hr /> */}
        <p className='footer-copyright'>Copyright 2024 &copy; Rentify.com -  All rights reserverd</p>
    </div>
  )
}
export default Footer

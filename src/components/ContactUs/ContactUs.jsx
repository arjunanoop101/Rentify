import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className='contact'>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <label htmlFor=""></label>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <input type="text-area" placeholder='Message'/>
        <button type='submit'>Submit</button>
        
      </div>
    </div>
  )
}

export default ContactUs

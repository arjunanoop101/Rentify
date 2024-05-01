import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState('home');
  return (
    <div className='navbar'>

     <Link to='/'><h2 className='logo'>Rentify.</h2></Link> 
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</Link>
        <a href='#product-display' onClick={()=>setMenu("Products")} className={menu==="Products"? "active":""}>Products</a>
        <a href='#contact-us' onClick={()=>setMenu("ContactUs")} className={menu==="ContactUs"? "active":""}>Contact Us</a>
        <a href='#' onClick={()=>setMenu("Sell")} className={menu==="Sell"? "active":""}>Sell</a>
      </ul>
      <div className="navbar-right">
        
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
       
        

        <div className="navbar-search-icon">
            <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size='xl'/></Link>
            <div className="dot"></div>
        </div>
          
           <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar

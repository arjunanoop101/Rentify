import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const [menu,setMenu] = useState('home');
  return (
    <div className='navbar'>

      <h2 className='logo'>Rentify.</h2>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</li>
        <li onClick={()=>setMenu("Listing")} className={menu==="Listing"? "active":""}>Listing</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"? "active":""}>Menu</li>
        <li onClick={()=>setMenu("ContactUs")} className={menu==="ContactUs"? "active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
       
        

        <div className="navbar-search-icon">
            <FontAwesomeIcon icon={faCartShopping} size='xl'/>
            <div className="dot"></div>
        </div>
          
           <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar

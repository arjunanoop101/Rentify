import React, { createRef, useState } from 'react'
import './LoginPopup.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign Up"); 
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <FontAwesomeIcon onClick={()=>setShowLogin(false)} icon={faXmark} size='xl'/>
        </div>
        <div className="login-popup-inputs">
                {currState==='Login'?<></>:<input type="text" placeholder='Your name' required/>}
            
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
        <input type="checkbox"  required/>
        <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
        
      </form> 
    </div>
  )
}

export default LoginPopup

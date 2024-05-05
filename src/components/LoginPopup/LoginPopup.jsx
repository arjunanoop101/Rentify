import React, { createRef, useState } from 'react'
import './LoginPopup.css'
import { useNavigate } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign Up"); 
    const [userCredentials,setUserCredentials] = useState({});

    function handleCredentials(e){
      setUserCredentials({...userCredentials,[e.target.name]:e.target.value})
    }

    function handleSignup(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,userCredentials.email,userCredentials.password)
        .then((userCredentials)=>{
          const user = userCredentials.user
          console.log(user);
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.errorMessage;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    function handleLogin(e){
      e.preventDefault();
      console.log("Login")
    }
    
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <FontAwesomeIcon onClick={()=>setShowLogin(false)} icon={faXmark} size='xl'/>
        </div>
        <div className="login-popup-inputs">
                {currState==='Login'?<></>:<input type="text" placeholder='Your name' required />}
            
            <input onChange={(e)=>{handleCredentials(e)}} type="email" placeholder='Your email' name='email' required />
            <input  onChange={(e)=>{handleCredentials(e)}} type="password" placeholder='password' name='password' required />
        </div>
        <button onClick={currState === "Sign Up" ? (e)=>handleSignup(e) : (e)=>handleLogin(e)}>
  {currState === "Sign Up" ? "Create Account" : "Login"}
</button>

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

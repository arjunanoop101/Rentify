import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Product from './pages/Product/Product'
import Sell from './pages/Sell/Sell'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import MyOrders from './pages/MyOrders/MyOrders'

// import {auth} from './firebase';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
 

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/Sell' element={<Sell/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/List' element={<List/>}/>
        <Route path='/MyOrders' element={<MyOrders/>}/>
        <Route path='/all' element={<Product/>}/>
        {/* <Route path='/product' element={<Product/>}/> */}
      </Routes>
    </div>
      <Footer/>
    
    </>
   

  )
}

export default App

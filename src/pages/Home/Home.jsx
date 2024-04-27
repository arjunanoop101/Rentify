import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Catogory from '../../components/Catogory/Catogory'
import ProductDisplay from '../../components/ProductDispaly/ProductDisplay'
import ContactUs from '../../components/ContactUs/ContactUs'
const Home = () => {

  const [catogory,setCatogory] = useState("All");
 
  return (
    <div>
      <Header/>
      <Catogory  catogory={catogory} setCatogory = {setCatogory}/>
      <ProductDisplay catogory={catogory}/>
      <ContactUs/>
    </div>
  )
}

export default Home

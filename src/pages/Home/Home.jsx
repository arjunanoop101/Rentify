import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Catogory from '../../components/Catogory/Catogory'
import ProductDisplay from '../../components/ProductDispaly/ProductDisplay'
const Home = () => {

  const [catogory,setCatogory] = useState("All");
 
  return (
    <div>
      <Header/>
      <Catogory  catogory={catogory} setCatogory = {setCatogory}/>
      <ProductDisplay catogory={catogory}/>
    </div>
  )
}

export default Home

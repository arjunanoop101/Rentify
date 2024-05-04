import React from 'react'
import './Sell.css'
import Sidebar from '../../components/Sidebar/Sidebar'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Sell = () => {
  return (
    <>
    <hr />
    <div className='sell-content'>
      <Sidebar/>
    </div>
    </>
  )
}

export default Sell

import React from 'react'
import './Catogory.css'
import { item_list } from '../../assets/assets'


const Catogory = ({catogory,setCatogory}) => { 
  return (
    <div className='catogory-menu' id='catogory-menu'>
      <h1>Catogories</h1>
      <p className='catogory-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi, aut minus assumenda ducimus ad aliquid quibusdam culpa laboriosam tenetur.</p>
      <div className="catogory-menu-list">
         {item_list.map((item,index)=>{
          return(
              <div onClick={()=>setCatogory(prev=>prev===item.item_name?"All":item.item_name)} key={index} className='catogory-menu-list-item'>
                  <img className={catogory===item.item_name?"active":""} src={item.item_image} />
                  <p>{item.item_name}</p>
              </div>
            )
         })}
      </div>
      <hr />
    </div>
  )
}

export default Catogory

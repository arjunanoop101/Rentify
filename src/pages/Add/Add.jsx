import React from 'react'
import './Add.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import upload from '../../assets/upload.jpg'
const Add = () => {
  return (
    <div className='add'>
    <Sidebar/>
    <div className='add-product'>
      <form className='flex-col'>
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={upload} alt="" />
            </label>
            <input type="file" id='image' hidden required/>
          </div>
          <div className="add-product-name flex-col" >
              <p>Product Name</p>
              <input type="text" name="name" placeholder='Type here' />
          </div>
          <div className="add-product-description flex-col">
              <p>Product Description</p>
              <textarea name="description" rows="6" placeholder='Write content here' required></textarea>
          </div>
          <div className="add-catogory-price">
            <div className="add-catogory flex-col">
              <p>Product Catogory</p>
              <select name="catogory" >
                <option value="Electronic">Electronics</option>
                <option value="Apartments">Apartments</option>
                <option value="Clothing">Clothing</option>
                <option value="Tools">Tools</option>
                <option value="Vehicles">Vehicles</option>
              </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input type="number" name='price' placeholder='$20'/>
            </div>
          </div>
          <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
    </div>
  )
}

export default Add

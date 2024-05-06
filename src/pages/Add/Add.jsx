import React,{useState} from 'react'
import './Add.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import upload from '../../assets/upload.jpg'
import { imgDB } from '../../firebase'
import { productDB } from '../../firebase'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'

const Add = () => {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('Electronic');
  const [productPrice, setProductPrice] = useState('');
  const [img, setImg] = useState('');

  const handleUpload = (e)=>{
    console.log(e.target.files[0]);
    const imgs = ref(imgDB,`productImgs/${v4()}`)
    uploadBytes(imgs,e.target.files[0]).then(data=>{
      console.log(data,"imgs");
      getDownloadURL(data.ref).then(val=>{
        setImg(val);
      })
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const docRef = await addDoc(collection(productDB, 'products'), {
            productName,
            productDescription,
            productCategory,
            productPrice,
            img
        });

        alert("Data added");
        console.log('Document written with ID: ', docRef.id);

        // Reset form fields
        setProductName('');
        setProductDescription('');
        setProductCategory('Electronic');
        setProductPrice('');
        setImg('');
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
  
  
  return (
    <div className='add'>
    <Sidebar/>
    <div className='add-product'>
      <form className='flex-col' onSubmit={handleSubmit}>
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={upload} alt="" />
            </label>
            <input type="file" id='image'  onChange={(e)=>handleUpload(e)}/>
          </div>
          <div className="add-product-name flex-col" >
              <p>Product Name</p>
              <input type="text" name="name" placeholder='Type here' value={productName} onChange={(e) => setProductName(e.target.value)}/>
          </div>
          <div className="add-product-description flex-col">
              <p>Product Description</p>
              <textarea name="description" rows="6" placeholder='Write content here' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required></textarea>
          </div>
          <div className="add-catogory-price">
            <div className="add-catogory flex-col">
              <p>Product Catogory</p>
              <select name="catogory" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
                <option value="Electronic">Electronics</option>
                <option value="Apartments">Apartments</option>
                <option value="Clothing">Clothing</option>
                <option value="Tools">Tools</option>
                <option value="Vehicles">Vehicles</option>
              </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input type="number" name='price' placeholder='$20' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required/>
            </div>
          </div>
          <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
    </div>
  )
}

export default Add

import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const ProfileMitra = () => {  

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          setImagePreview(e.target.result);
        };
  
        reader.readAsDataURL(input.files[0]);
      }
    };

  return (
    <div>
      <Navbar/>
      <form style={{backgroundColor:'transparent'}}>
        <div className='flex items-center justify-center gap-12 '>
            <div>
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none'}} onChange={handleImageChange}/>
                <label htmlFor="imageInput">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                ) : (
                    <img
                    src="../../images/imgcard.png" // Ganti dengan path gambar tanda tambah
                    alt="Tambah Gambar"
                    style={{ cursor: 'pointer', width: '450px' }}
                    />
                )}
                </label>
            </div>
            <div className='flex flex-col gap-2'>
                <input style={{width: "600px"}} className='card-profile h-14 p-5' type="text" name="" id="" placeholder='Bussines Name' />
                <input style={{width: "600px"}} className='card-profile h-14 p-5' type="text" name="" id="" placeholder='Bussines Description'/>
            </div>   
        </div>
        <div className='flex items-center justify-center'>
            <input className='card-profile w-3/5 h-14 p-5 my-5' type="text" name="" id="" placeholder='Service Description'/>
        </div>
        <div className='flex items-center justify-center gap-5 mb-5'>
            <input style={{width:'29.5%'}} className='card-profile h-14 p-5 ' type="text" name="" id="" placeholder='Price'/>
            <input style={{width:'29.5%'}} className='card-profile h-14 p-5 ' type="text" name="" id="" placeholder='Location'/>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <div>
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none'}} onChange={handleImageChange}/>
                <label htmlFor="imageInput">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                ) : (
                    <img
                    src="../../images/imgcard.png" // Ganti dengan path gambar tanda tambah
                    alt="Tambah Gambar"
                    style={{ cursor: 'pointer', width: '360px' }}
                    />
                )}
                </label>
            </div>
            <div>
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none'}} onChange={handleImageChange}/>
                <label htmlFor="imageInput">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                ) : (
                    <img
                    src="../../images/imgcard.png" // Ganti dengan path gambar tanda tambah
                    alt="Tambah Gambar"
                    style={{ cursor: 'pointer', width: '360px' }}
                    />
                )}
                </label>
            </div>
            <div>
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none'}} onChange={handleImageChange}/>
                <label htmlFor="imageInput">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                ) : (
                    <img
                    src="../../images/imgcard.png" // Ganti dengan path gambar tanda tambah
                    alt="Tambah Gambar"
                    style={{ cursor: 'pointer', width: '360px' }}
                    />
                )}
                </label>
            </div>
        </div>
      </form>
      <Footer/>
    </div>
  )
}

export default ProfileMitra

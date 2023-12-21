import React, { useState, useEffect } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Import Detail component from the correct path
import Detail from '../Customer/Detail';
import { useNavigate } from 'react-router-dom';
import Review from '../components/Review';
import Dbox from '../components/Dbox';

function Service() {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null); // State to store the selected item ID
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/partners');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Failed to fetch data from API:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle the click event on "Book Now" button
  const handleBookNow = (id) => {
    localStorage.setItem('idMitra', id);
    setSelectedItemId(id); // Set the selected item ID
  };

  // Function to navigate to booking page (assuming this function exists)
  const navbooking = () => {
    navigate("/booking");
    // Implement navigation logic to the booking page
    // For example: history.push('/booking'); or window.location.href = '/booking';
  };

  // Function to render details based on the selected item ID
  const renderDetails = () => {
    const selectedItem = data.find((item) => item.idpartnes === selectedItemId);
    if (selectedItem) {
      // return (
      //   <div className='fixed inset-0 flex items-center justify-center bg-white z-50 w-screen h-screen'>
      //     <button onClick={handleRefresh} className=' text-cyan-50'>kembali</button> 
      //     <img src='images/bimage.png' alt='Business Image' />
      //     <div className='my-auto' style={{width: '587px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:'10px'}}>
      //       <div className='font-medium font-Poppins text-3xl'>{selectedItem.name}</div>
      //       <div className='flex gap-2'>
      //         <img src="images/pinmaps.png" alt='Map Pin' />
      //         <div className='font-Poppins text-sm'>
      //           {selectedItem.loc}
      //         </div>
      //       </div>
      //       <div className='text-justify font-Poppins text-base' style={{width: '565px'}}>
      //         {selectedItem.description}
      //       </div>
      //       <button onClick={navbooking} className='font-Poppins px-3 w-40 h-11 rounded-md text-white text-lg'>
      //         Book Now
      //       </button>
      //     </div>
      //   </div>
      // );
      return (
        <div className='fixed inset-0 flex-col justify-center items-center bg-white z-50 w-screen h-auto'>
          <div className='scrollable-details overflow-y-auto'>
            <div className='flex items-center justify-center my-14'>
              <img src='images/bimage.png' alt='Business Image' />
                <div className='my-auto ml-10' style={{width: '587px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:'10px'}}>
                  <div className='font-medium font-Poppins text-3xl'>{selectedItem.name}</div>
                  <div className='flex gap-2'>
                    <img src="images/pinmaps.png" alt='Map Pin' />
                    <div className='font-Poppins text-sm'>
                      {selectedItem.loc}
                    </div>
                  </div>
                  <div className='text-justify font-Poppins text-base' style={{width: '565px'}}>
                    {selectedItem.description}
                  </div>
                  <button onClick={navbooking} className='px-3 w-40 h-11 rounded-md text-white text-lg'>Book Now</button>
                  <button onClick={handleRefresh} className='px-3 w-40 h-11 rounded-md text-white text-lg'>Back</button> 
                </div>
            </div>
            <Dbox />
            <Review />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="Service">
      <NavbarLogin />
      <div className="details-section">{renderDetails()}</div>
      <div className="flex flex-wrap items-start justify-start h-auto py-5 mx-60">
        {data.map((item) => (
          <div key={item.idpartnes} className="item">
            <div className="Card w-72 rounded-md px-3 py-3 mx-5 my-5">
              <img src="images/imgcard.png" alt="" />
              <div className="card-content">
                <div className="card-body font-Poppins p-0 gap-0 my-4">
                  <p className="card-tittle w-full font-medium text-xl">{item.name}</p>
                  <p className="card-text w-full text-sm mt-2">{item.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="font-Poppins px-3 h-8 rounded-md text-white text-sm"
                    onClick={() => handleBookNow(item.idpartnes)}
                  >
                    Book Now
                  </button>
                  <div className="price font-Poppins font-medium text-sm">Rp. {item.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Render details section */}
      <Footer />
    </div>
  );
}

export default Service;


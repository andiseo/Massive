import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import Inputreview from '../components/Inputreview';

const Status = () => {
  const [status, setStatus] = useState(1);
  const [statusData, setStatusData] = useState([]);
  const idUser = localStorage.getItem('idUser');
  const idMitra = localStorage.getItem('idMitra');
  console.log( `'ini id user '${idUser}`)
  console.log(idMitra)
  const kondisiStatus = () => {
    setStatus(2);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    fetch('http://localhost:4000/users/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idUser }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatusData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching status:', error);
      });
  }, [idUser]);

  if (status === 1) {
    return (
      <>
        {idUser ? <NavbarLogin /> : <Navbar />}
        {statusData.map((status) => (
          <li key={status.id} className='list-none'>
            <div className='flex dbox items-center justify-center mx-auto p-7 rounded-md my-12' style={{ width: '1240px', height: '650px', background: 'white' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '10px' }}>
                <img src="images/bimage.png" alt="" style={{ width: 500, height: 300 }} />
                <div className="card-tittle font-medium text-2xl">{status.name}<br /></div>
                <div className='flex gap-2'>
                  <img src="images/pinmaps.png" alt="" />
                  <div className='font-Poppins text-sm'>
                    {status.loc}
                  </div>
                </div>
                <div className='text-justify font-Poppins text-base' style={{ width: '565px' }}>{status.service}<br />
                  {status.description}</div>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <div className='flex justify-between items-center font-Poppins'>
                  <div>
                    <div>{status.nameUser}</div>
                    <div>{status.contact}</div>
                  </div>
                  <div className='items-center'> Date : {formatDate(status.date)}</div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='pick-container rounded-md p-3'>
                    <div className='text-center text-white m-2 font-medium'>Pick Up</div>
                    <div className='pick-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                      <div className='text-justify text-white text-sm'>{status.pickAddress}</div>
                      <img src="images/pinmaps2.png" alt="" />
                    </div>
                  </div>
                  <div className='drop-container rounded-md p-3'>
                    <div className='text-center text-white m-2 font-medium'>Drop Of</div>
                    <div className='drop-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                      <div className='text-justify text-white text-sm'>{status.dropAddress}</div>
                      <img src="images/pinmaps2.png" alt="" />
                    </div>
                  </div>
                </div>
                <button className='w-full h-16 mt-2 rounded-md text-white text-lg' onClick={kondisiStatus}  >Confirm</button>
              </div>
            </div>
          </li>
        ))}
        <Footer />
      </>
    );
  }

  if (status === 2) {
    return (
      <>
        <Navbar />
        <Inputreview />
        <Footer />
      </>
    );
  }
};

export default Status;

import React from 'react'
import Sidebar from '../components/Sidebar';
import NavbarAdmin from '../admin/NavbarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function index() {
  return (

<div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <NavbarAdmin />
      <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div>
            <h2 className='ml-3 text-base text-slate-500 font-medium hover:text-blue-500 mb-5'>Home / Patner</h2>
            <div className='bg-blue-500 p-2 mt-2 w-20 h-15 rounded text-center text-white mb-1 hover:bg-blue-600'>
              <a href="/inputpatner">Insert</a>
              </div>
           
      <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full border border-2 table-auto text-center ">
        <thead className="bg-blue-300">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Nik</th>
            <th className="py-2 px-4 border-b">Types of vehicles</th>
            <th className="py-2 px-4 border-b">Vehicle Number</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody >
         
            <tr  className="hover:bg-gray-50 ">
              <td className="py-2 px-9 border-b">20221</td>
              <td className="py-2 px-9 border-b">Muhammad andi</td>
              <td className="py-2 px-9 border-b">234542</td>
              <td className="py-2 px-9 border-b">Avanza</td>
              <td className="py-2 px-9 border-b">234532</td>
              <td className="py-2 px-9 border-b">Rivian</td>
              <td className="py-2 px-9 border-b ">
              <div className="flex space-x-2 justify-center ">
                <a href="/viewpatner"> <FontAwesomeIcon icon={faEye} className="text-blue-500 cursor-pointer " title="View" /></a>
                <a href="/editpatner">  <FontAwesomeIcon icon={faEdit} className="text-green-500 cursor-pointer" title="Edit" /></a>
                <a href="/deletepatener"> <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" title="Delete" /></a>
             
               
                
                </div>
         
                
             
             
              </td>
           
            </tr>
        </tbody>
      </table>
    </div>
    </div>
    </main>
    </div>
  </div>
  )
}

export default index
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function listcustomer() {
  return (
    <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div>
            <h2 className='ml-3 text-base text-slate-500 font-medium hover:text-blue-500 mb-5'>Customer</h2>
           
      <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full border border-2 table-auto text-center ">
        <thead className="bg-blue-300">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Telepon</th>
          
          </tr>
        </thead>
        <tbody >
         
            <tr  className="hover:bg-gray-50 ">
              <td className="py-2 px-9 border-b">20221</td>
              <td className="py-2 px-9 border-b">Muhammad andi</td>
              <td className="py-2 px-9 border-b">muhammad@gmail</td>
              <td className="py-2 px-9 border-b">2021098</td>
           
            </tr>
        </tbody>
      </table>
    </div>
    </div>
    </main>
  )
}

export default listcustomer
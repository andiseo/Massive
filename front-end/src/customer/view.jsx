import React from 'react'
import Sidebar from '../components/Sidebar';
import NavbarAdmin from '../admin/NavbarAdmin'

function view() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <NavbarAdmin />
      <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
      <h2 className='ml-3 text-base text-slate-500 font-medium hover:text-blue-500 mb-5'>Home / Customer</h2>
     

    <div class="max-w-4xl flex items-center ml-3">

        <div id="profile"
            class="w-full lg:w-3/5 drop-shadow-md rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                 


            <div class="p-4 md:p-12 text-center lg:text-left">

                <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">Lemenho</h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                   korut,cangseuu,iwana
                </p>
                <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                   lemenhe@gmail.com
                </p>
                <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                   luminhu12
                </p>
                <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                   098877663552
                </p>
                <p class="pt-8 text-sm">The Actor profesional the best of the w</p>

                <div class="pt-12 pb-8">
                    <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				         Get In Touch
				     </button>
                </div>

                

           
            </div>

        </div>

    
        <div class="w-full lg:w-2/5 drop-shadow-md">
            <img src="/image/lemenhe.jpg" alt="" className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block'/>
      
           
       

        </div>


 
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
            <button class="js-change-theme focus:outline-none">🌙</button>
        </div>

    </div>

   
	
    
  </main>
    </div>
  </div>
  )
}

export default view
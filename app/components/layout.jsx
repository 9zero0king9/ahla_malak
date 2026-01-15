import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Footer from './footer';
import foto22 from '../assets/png/foto22.png';
import "../globals.css";

function Layout() {
  return (

      <div
        className="w-full bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${foto22.src})`,
          backgroundPosition: 'top',
          width: '100%',
          height: '90vh',
        }}
      >
        <div className='flex h-full md:items-center items-end rounded-t-4xl justify-end md:mr-10 mx-5'>

          <div className='mb-30'>
            
            <div className='backdrop-blur-3xl md:p-8 p-3 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50'>
              <h1 className='md:text-4xl text-xl font-bold text-white text-center md:mb-6 mb-2'>فن الانوثة بايدي سحرية</h1>
              <h1 className='md:text-2xl text-lg font-bold text-black text-center'>العناية بالوجه , العناية بالشعر , ازالة الشعر بالشمع , العناية بل اظافر و دورات تعليمية</h1>
              <Link href='/contact'>
                <h1 className='md:text-4xl text-2xl font-bold text-red-800 text-center zoom md:mt-5 mt-2'>احجزي الان</h1>
              </Link>
            </div>

          </div>
        </div>

      </div>
      
  

  )
}

export default Layout
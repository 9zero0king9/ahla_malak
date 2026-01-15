import React from 'react'
import servicesp from '../assets/phone-assets/png/phone_services.png';
import Link from 'next/link';
function phone_services() {
  return (
    <div className='bg-cover'
    style={{
            backgroundImage: `url(${servicesp.src})`,
            backgroundPosition: 'top',
            width: '100%',
            height: '90vh',
            
          }}>
        <div className='flex h-full items-end rounded-t-4xl justify-end mx-5'>

            <div className='mb-10'>
            
                <div className='backdrop-blur-3xl p-3 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50'>
                <h1 className='text-xl font-bold text-white text-center md:mb-6 mb-2'>   في صالون أحلى ملاك    </h1>
                <h1 className='text-lg font-bold text-black text-center'>  ما بنحط قالب واحد للكل كل زبونة الها عندنا قصتها الخاصة وإطلالتها اللي بتميزها  </h1>
                <Link href='/contact'>
                    <h1 className=' text-2xl font-bold text-red-800 text-center zoom  mt-2'>احجزي الان</h1>
                </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default phone_services
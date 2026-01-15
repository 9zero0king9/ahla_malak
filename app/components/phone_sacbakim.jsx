import React from 'react'
import sacbakim from '../assets/phone-assets/png/phone_sacbakim.png'
import Link from 'next/link';
function Phone_sacbakim() {
  return (
    <div
        className="w-full bg-cover   "
                  style={{
                    backgroundImage: `url(${sacbakim.src})`,
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '90vh',
                    
                  }}>
                    <div className='flex h-full md:items-center items-end rounded-t-4xl justify-end md:mr-12 mx-5'>

                  <div className='mb-20'>
                    
                        <div className='backdrop-blur-3xl p-5 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50 '>
                            <h1 className='md:text-4xl text-2xl font-bold text-white text-center md:mb-10 mb-2' >   في صالون أحلى ملاك   </h1>
                            <h1 className='text-2xl font-bold text-black text-center'> شعرك ليس مجرد خصلات بل هو تاجك الذي نعتني به كجوهرة نادرة حتى يلمع دائمًا بجمال لا يُقاوم </h1>
                            <Link href='/'>
                                <h1 className='md:text-4xl text-2xl font-bold text-red-800 text-center zoom md:mt-5'>احجزي الان</h1>
                            </Link>
                          </div>

                  </div>
                </div>

    </div>
  )
}

export default Phone_sacbakim
import React from 'react'
import ders from '../assets/png/ders.png'
import Link from 'next/link'
function ders1() {
  return (
    <div
    className='bg-cover'
        style={{
                backgroundImage: `url(${ders.src})`,
                backgroundPosition: 'center',
                width: '100%',
                height: '90vh',
                
              }}>
            <div className='flex h-full items-center rounded-t-4xl justify-end mr-27'>
                <div className=''>
                    <div className='backdrop-blur-3xl p-10 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50'>
                        <h1 className='text-4xl font-bold text-white text-center mb-10'>في صالون أحلى ملاك</h1>
                        <h1 className='text-2xl font-bold text-black text-center'> خبراؤنا جاهزين ليقدموا لك دورات تعليمية لأنك تستحقين الأفضل دائمًا </h1>
                        <Link href='/'>
                            <h1 className='text-4xl font-bold text-red-800 text-center zoom mt-5'>احجزي الان</h1>
                        </Link>
                    </div>
                </div>
            </div>

                
        
    </div>
  )
}

export default ders1
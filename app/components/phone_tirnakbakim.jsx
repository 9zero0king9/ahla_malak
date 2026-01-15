import React from 'react'
import tirnakbakim from '../assets/phone-assets/png/phone_tirnakbakim.png'
import Link from 'next/link';
function Phone_tirnakbakim() {
  return (
    <div
        className="w-full bg-cover   "
                  style={{
                    backgroundImage: `url(${tirnakbakim.src})`,
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '90vh',
                  }}>
                    <div className='flex h-full md:items-center items-end rounded-t-4xl justify-end md:mr-12 mx-5'>

                  <div className='mb-20'>
                        <div className='backdrop-blur-3xl p-8 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50 '>
                            <h1 className='md:text-4xl text-2xl font-bold text-white text-center md:mb-10'>في صالون أحلى ملاك</h1>
                            <h1 className='md:text-2xl text-xl font-bold text-black text-center'> أظافرك مرآة جمالك، ونحن نهتم بها بأحدث تقنيات العناية والتجميل لتبقى صحية وجذابة </h1>
                            <Link href='/'>
                                <h1 className='md:text-4xl text-2xl font-bold text-red-800 text-center zoom md:mt-5'>احجزي الان</h1>
                            </Link>
                          </div>

                    </div>
                    </div>

    </div>
  )
}

export default Phone_tirnakbakim
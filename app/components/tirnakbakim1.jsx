import React from 'react'
import tirnakbakim from '../assets/png/tirnakbakim.png'
import Link from 'next/link';
function tirnakbakim1() {
  return (
    <div
        className="w-full bg-cover   "
                  style={{
                    backgroundImage: `url(${tirnakbakim.src})`,
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '90vh',
                  }}>
                    <div className='flex h-full items-center rounded-t-4xl justify-end mr-12'>

                  <div className=''>
                        <div className='backdrop-blur-3xl p-8 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50 '>
                            <h1 className='text-4xl font-bold text-white text-center mb-10'>في صالون أحلى ملاك</h1>
                            <h1 className='text-2xl font-bold text-black text-center'> أظافرك مرآة جمالك، ونحن نهتم بها بأحدث تقنيات العناية والتجميل لتبقى صحية وجذابة </h1>
                            <Link href='/'>
                                <h1 className='text-4xl font-bold text-red-800 text-center zoom mt-5'>احجزي الان</h1>
                            </Link>
                          </div>

                    </div>
                    </div>

    </div>
  )
}

export default tirnakbakim1
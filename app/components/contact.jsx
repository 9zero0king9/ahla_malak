import React from 'react'
import Image from 'next/image'
import contact2 from '../assets/png/contact2.png'
import Link from 'next/link'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import qrcode2 from '../assets/png/qrcode2.jpg'
import qrcode from '../assets/png/qrcode.jpg'
import Footer from './footer';
function contact() {
  return (
    <>
    <div
          className="w-full bg-cover   "
          style={{
            backgroundImage: `url(${contact2.src})`,
            backgroundPosition: 'top',
            width: '100%',
            height: '90vh',
            
          }}>
            <div className='flex h-full items-center rounded-t-4xl justify-end mr-10'>

                <div className=''>
                    
                    <div className='backdrop-blur-3xl p-5 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50'>
                        <h1 className='text-3xl font-bold text-white text-center mb-10'> تواصلي معنا  </h1>
                        <div className='flex justify-around mb-5'>
                            <div>
                                <div> <Link href='https://www.facebook.com/share/16NgaTAmMX/'> <Image src={facebook} alt='facebook' className='w-13 ml-10 mt-2 zoom' /> </Link>  </div>
                                <div> <Link href='https://www.instagram.com/ahlamalak2024?utm_source=qr&igsh=MWR1ZXlyaTZmY3k3bA=='> <Image src={instagram} alt='instagram' className='w-13 ml-10 mt-10 zoom' /> </Link>  </div> 
                            </div>

                            <div className='m-5 mt-6'>
                                <h1 className='text-2xl font-bold text-black text-center mb-12 zoom'> 0940599162 </h1>
                                <h1 className='text-2xl font-bold text-black text-center mb-5 zoom'> 0945882802 </h1>
                            </div>

                            <div className='flex'>
                                <Image src={qrcode2} alt='qr' className='w-40 ml-10 mb-10 zoom' />
                                <Image src={qrcode} alt='qr' className='w-40 ml-10 mb-10 zoom' />
                            </div>
                        </div>
                        <h1 className='text-2xl font-bold text-white text-center mb-10'> سيف الدوله المولات مفرق كليه العلوم مقابل سنتر تيم </h1>    

                      

                    </div>

                </div>
            </div>

    </div>
    <Footer bgColor='bg-gray-300' />
    </>
  )
}

export default contact
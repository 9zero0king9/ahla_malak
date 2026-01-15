import React from 'react'
import Image from 'next/image'
import contact2 from '../assets/phone-assets/png/phone_contact.png'
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
            <div className='flex h-full md:items-center items-end rounded-t-4xl justify-end md:mr-10 mx-5'>

                <div className='mb-10'>
                    
                    <div className='backdrop-blur-3xl p-5 rounded-4xl zoom2 bg-gradient-to-r from-orange-400 to-white to-130% from-50% shadow-2xl shadow-orange-500/50'>
                        <h1 className='md:text-4xl text-2xl font-bold text-white text-center md:mb-10'> تواصلي معنا  </h1>
                        <div className='flex justify-around mb-2'>
                            <div className='mt-2'>
                                <div> <Link href='https://www.facebook.com/share/16NgaTAmMX/'> <Image src={facebook} alt='facebook' className='md:w-13 w-8 md:ml-10 ml-5 mt-2 zoom' /> </Link>  </div>
                                <div> <Link href='https://www.instagram.com/ahlamalak2024?utm_source=qr&igsh=MWR1ZXlyaTZmY3k3bA=='> <Image src={instagram} alt='instagram' className='md:w-13 w-8 md:ml-10 ml-5 md:mt-10 mt-2 zoom' /> </Link>  </div> 
                            </div>

                            <div className='md:m-5 m-2 md:mt-6  '>
                                <h1 className='md:text-2xl text-xl font-bold text-black text-center md:mb-12 mt-2 mb-2  zoom'> 0940599162 </h1>
                                <h1 className='md:text-2xl text-xl font-bold text-black text-center md:mb-5  zoom'> 0945882802 </h1>
                            </div>

                           
                        </div>
                        <h1 className='md:text-4xl text-2 font-bold text-white text-center md:mb-10 mb-5'> سيف الدوله المولات مفرق كليه العلوم مقابل سنتر تيم </h1>    

                      

                    </div>

                </div>
            </div>

    </div>
    <Footer bgColor='bg-gray-300' />
    </>
  )
}

export default contact
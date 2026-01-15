import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import fotlogo from '../assets/svg/fotlogo.svg'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import qrcode from '../assets/png/qrcode.jpg'

function footer({ bgColor = 'bg-red-800' }) {
  return (
    <div className={`${bgColor} w-full h-2/3 `}>
        <div className='flex justify-between md:mx-26 pt-10 mb-4 '>
            <div className='mt-5'>
                <Link href=''> 
                    <Image src={fotlogo} alt='fot' className='md:w-74 w-50 zoom ' />
                </Link>
            </div>  

            <div className='bg-white md:w-2/9 w-1/2 rounded-2xl mb-5 m-5'>
                <h1 className='text-black text-center md:text-2xl text-xl font-extrabold p-5'> تواصلو معنا </h1>
                <div className='flex mb-3'>
                    <div>
                        <div> <Link href='https://www.facebook.com/share/16NgaTAmMX/'> <Image src={facebook} alt='facebook' className='md:w-10 w-8 md:ml-10 ml-2 md:mt-5 zoom' /> </Link>  </div>
                        <div> <Link href='https://www.instagram.com/ahlamalak2024?utm_source=qr&igsh=MWR1ZXlyaTZmY3k3bA=='> <Image src={instagram} alt='instagram' className='md:w-10 w-8 md:ml-10 ml-2 md:mt-10 mt-5  zoom' /> </Link>  </div>
                    </div>

                    <div>
                        <Image src={qrcode} alt='qr' className='md:w-40 w-20 md:ml-10 ml-5  zoom' />
                    </div> 
                                        
                </div>
                
            </div>
            
        </div>

        <div className='md:flex flex-col justify-end   '>
            <h1 className='text-black text-center font-bold '> تم الانشاء من قبل فرقة تيكنو زيرو للتواصل  0954585710   </h1> 
            <h1 className='text-black text-center font-bold p-2'>جميع الحقوق محفوظة &copy; 2024 </h1>
        </div>


    </div>
  )
}

export default footer
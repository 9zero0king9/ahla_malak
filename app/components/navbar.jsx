import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import house from '../assets/svg/house-cleaning.svg' 
import menu from '../assets/svg/menu-burger.svg'
import aboutus from '../assets/svg/about-us.svg'
import logo from '../assets/svg/logo.svg'
import book from '../assets/svg/book.svg'
import contact from '../assets/svg/contact.svg'
function navbar() {
  return (
    <div className=' bg-gray-200 w-full md:h-20 h-17'>
        <div className='flex md:justify-between  md:px-28 '>
          
           <div className='flex'>
             

              <div className='md:mx-12 h-0.5 mt-4 mx-4  md:mt-4 '>
                <Link href="/services">
                  <div className='zoom '>
                    <Image src={menu} alt="about" width={50} height={50} className='md:w-6 w-5 md:ml-3 ml-2 mb-1'/>
                    <h4 className='font-bold md:text-xl text-sm text-gray-500 '>الخدمات</h4>
                  </div>
                </Link>
              </div>

              <div className='zoom mt-3'>
                <Link href='/aboutus'>
                  <Image src={aboutus} alt="about" width={50} height={50} className='md:w-6 w-6 md:ml-6 ml-4 mb-1 '/>
                  <h4 className='font-bold md:text-xl text-sm md:mt-2 text-gray-500 whitespace-nowrap'> معلومات عننا </h4> 
                  
                </Link>
              </div>
          </div>
          
          

            <div className='bg-amber-600 rounded-4xl shadow-orange-500 shadow-xl ml-30 hidden md:block '>
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={100} className='w-44 zoom'/>
              </Link>
            </div>

            <div className='flex '>
              <div className='ml-4 mt-2 zoom ' >
                <Link href="/contact">
                   <Image src={book} alt='book' className='md:w-10 w-8 ml-3  ' />
                   <p className='font-bold md:text-xl text-sm whitespace-nowrap text-gray-500 '> احجزي الان </p>
                </Link>
              </div>

              <div className='ml-4 zoom ' >
                <Link href='/contact' >
                    <Image src={contact} alt='contact' className='w-8 h-6 mt-4   ml-3 mb-1gi  ' />
                    <p className='font-bold md:text-xl md:mt-2 text-sm whitespace-nowrap text-gray-500'> تواصلي معنا </p>
                </Link>
              </div>
              
              <div className='bg-amber-600 rounded-4xl shadow-orange-500 shadow-xl ml-4 mt-5 md:hidden block '>
                <Link href="/">
                  <Image src={logo} alt="logo" width={100} height={100} className='w-30 zoom'/>
                </Link>
              </div>

            </div>

        </div>

       
        
    </div>
  )
}

export default navbar
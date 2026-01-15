import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import yuz from '../assets/png/yuz.jpg'
import sac from '../assets/png/sac.jpg'
import mum from '../assets/png/mum.jpg'
import tirnak from '../assets/png/tirnak.jpg'
import egitim from '../assets/png/egitim.jpg'
import Footer from './footer';

function layout2() {
  return (
    <>
    <div className=' bg-gray-200 pb-15 px-6 '>

      <div className='py-5'>
      <h1 className='flex justify-center md:text-5xl text-3xl font-bold '> خدماتنا </h1>
      </div>

      <div className='flex justify-around md:mx-40 '>

        <div className='md:flex'>

          <div className='zoom2'>
            <Link href='/services/ders'>
              <Image src={egitim} alt='' className='md:w-50 w-30 md:h-70 h-40 rounded-2xl'/>
              <h1 className='font-bold text-black md:text-2xl text-xl text-center my-3'> دورات تعليمية </h1>
            </Link>        
          </div>

          <div className='zoom2 md:mx-6'>
            <Link href='/services/tirnakbakim'> 
              <Image src={tirnak} alt='' className='md:w-50 w-30 md:h-70 h-40 rounded-2xl'/>
              <h1 className='font-bold text-black md:text-2xl text-xl text-center my-3'> العناية بل اظافر </h1>
            </Link>       
          </div>

          <div className='zoom2'>
            <Link href='/services/mumbakim'> 
              <Image src={mum} alt='mum' className='md:w-50 w-30 md:h-70 h-40 rounded-2xl'/>
              <h1 className='font-bold text-black md:text-2xl text-xl text-center my-3'> ازالة الشعر بالشمع </h1>
            </Link>
          </div>

        </div>



        <div className='md:flex md:mr-6 '>

          <div className='zoom2 md:mr-6'>
            <Link href='/services/sacbakim'>
              <Image src={sac} alt='sac' className='md:w-50 w-30 md:h-70 h-40 rounded-2xl'/>
              <h1 className='font-bold text-black md:text-2xl text-xl text-center my-3'> العناية بل شعر </h1>          
            </Link>
          </div>

          <div className='zoom2'>
            <Link href='/services/yuzbakim'>
              <Image src={yuz} alt='yuz' className='md:w-50 w-30 md:h-70 h-40 rounded-2xl' />
              <h1 className='font-bold text-black md:text-2xl text-xl text-center my-3'> العناية بل وجه </h1>          
            </Link>
          </div>

        </div>
        

      </div>            
    </div>
    </>
  )
}

export default layout2
import React from 'react'
import Ders1 from '../../components/ders1.jsx'
import Ders2 from '@/app/components/ders2.jsx'
import Phone_ders from '@/app/components/phone_ders.jsx'
function page() {
  return (
    <div>
       <div className='md:block hidden'> <Ders1 /> </div> 
       <div className='md:hidden block'> <Phone_ders /> </div>
        <Ders2 />
    </div>
  )
}

export default page
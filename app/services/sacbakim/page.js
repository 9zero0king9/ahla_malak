import React from 'react'
import Sacbakim1 from '../../components/sacbakim1.jsx'
import Sacbakim2 from '@/app/components/sacbakim2.jsx'
import Phone_sacbakim from '@/app/components/phone_sacbakim.jsx'
function page() {
  return (
    <div>
      <div className='md:block hidden'> <Sacbakim1 /> </div>
      <div className='md:hidden block'> <Phone_sacbakim /> </div>
        <Sacbakim2 />
    </div>
  )
}

export default page
import React from 'react'
import Mumbakim1 from '../../components/mumbakim1.jsx'
import Mumbakim2 from '@/app/components/mumbakim2.jsx'
import Phone_mumbakim from '@/app/components/phone_mumbakim.jsx'
function page() {
  return (
    <div>
      <div className='md:block hidden'> <Mumbakim1 /> </div>
      <div className='md:hidden block'> <Phone_mumbakim /> </div>
        <Mumbakim2 />
    </div>
  )
}

export default page
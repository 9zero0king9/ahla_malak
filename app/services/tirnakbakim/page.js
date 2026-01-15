import React from 'react'
import Tirnakbakim1 from '../../components/tirnakbakim1.jsx'
import Tirnakbakim2 from '@/app/components/tirnakbakim2.jsx'
import Phone_tirnakbakim from '@/app/components/phone_tirnakbakim.jsx'
function page() {
  return (
    <div>
      <div className='md:block hidden'> <Tirnakbakim1 /> </div>
      <div className='md:hidden block'> <Phone_tirnakbakim /> </div>
        <Tirnakbakim2 />
    </div>
  )
}

export default page
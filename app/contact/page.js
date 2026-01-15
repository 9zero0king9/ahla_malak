import React from 'react'
import Contact from '../components/contact.jsx'
import Phone_contact from '../components/phone_contact.jsx';
function page() {
  return (
    <div>
        <div className='md:block hidden' > <Contact /> </div> 
        <div className='md:hidden block'> <Phone_contact /> </div>
    </div>
  )
}

export default page
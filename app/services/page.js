import React from 'react'
import Services1 from '../components/services1'
import Layout3 from '../components/layout3.jsx';
import Footer from '../components/footer.jsx';
import Phone_services from '../components/phone_services.jsx'; 
function page() {
  return (
    <div>
        <div className="md:block hidden"> <Services1 /> </div>
        <div className="md:hidden block">  <Phone_services /> </div>
        <Layout3 />
        <Footer bgColor='bg-red-800' />
    </div>
  )
}

export default page
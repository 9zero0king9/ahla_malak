import React from 'react'
import Contact from '../components/contact.jsx'
import Phone_contact from '../components/phone_contact.jsx';

export const metadata = {
  title: "اتصل بنا - صالون أحلى ملك",
  description: "اتصل بصالون أحلى ملك | احجز موعدك الآن | معلومات التواصل والعنوان",
  keywords: "اتصل بنا، احجز موعد، صالون تجميل",
};

function page() {
  return (
    <div>
        <div className='md:block hidden' > <Contact /> </div> 
        <div className='md:hidden block'> <Phone_contact /> </div>
    </div>
  )
}

export default page
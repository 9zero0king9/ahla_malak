import React from 'react'
import About_us from '../components/about_us.jsx'
import About_us1 from '../components/about_us1.jsx'
import Phone_abputus from '../components/phone_aboutus.jsx';

export const metadata = {
  title: "عن صالون أحلى ملك | من نحن",
  description: "اعرف أكثر عن صالون أحلى ملك - خبرتنا، فريقنا المتخصص، والخدمات المميزة",
  keywords: "عن الصالون، فريق متخصص، خدمات تجميل احترافية",
};

function page() {
  return (
    <>
    <div>
        <div className="md:block hidden"> <About_us1 /> </div>
        <div className="md:hidden block">  <Phone_abputus /> </div>
        <About_us />  
    </div>
    </>
  )
}

export default page
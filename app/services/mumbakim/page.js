import React from 'react'
import Mumbakim1 from '../../components/mumbakim1.jsx'
import Mumbakim2 from '@/app/components/mumbakim2.jsx'
import Phone_mumbakim from '@/app/components/phone_mumbakim.jsx'

export const metadata = {
  title: 'تجميل اليد والعناية - صالون أحلى ملاك',
  description: 'خدمات تجميل وعناية اليد والأظافر المتخصصة. تقنيات حديثة وخبراء متدربون في حلب',
  keywords: 'تجميل اليد، عناية الأظافر، مانيكير، تجميل يدين، hand care',
};

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
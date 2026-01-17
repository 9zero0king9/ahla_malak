import React from 'react'
import Tirnakbakim1 from '../../components/tirnakbakim1.jsx'
import Tirnakbakim2 from '@/app/components/tirnakbakim2.jsx'
import Phone_tirnakbakim from '@/app/components/phone_tirnakbakim.jsx'

export const metadata = {
  title: 'تجميل وعناية الأظافر - صالون أحلى ملاك',
  description: 'خدمات تجميل الأظافر المتخصصة. ديزاينات حديثة وتقنيات احترافية في حلب',
  keywords: 'تجميل أظافر، مانيكير، ديزاين أظافر، عناية أظافر، nails',
};

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
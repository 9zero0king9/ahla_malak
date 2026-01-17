import React from 'react'
import Sacbakim1 from '../../components/sacbakim1.jsx'
import Sacbakim2 from '@/app/components/sacbakim2.jsx'
import Phone_sacbakim from '@/app/components/phone_sacbakim.jsx'

export const metadata = {
  title: 'تجميل وعناية الشعر - صالون أحلى ملاك',
  description: 'خدمات تجميل وعناية الشعر بأحدث التقنيات. قص، صبغ، وعلاجات شعر احترافية في حلب',
  keywords: 'تجميل شعر، عناية الشعر، قص شعر، صبغ شعر، مصفف شعر، hair salon',
};

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
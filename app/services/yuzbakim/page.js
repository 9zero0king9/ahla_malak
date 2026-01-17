import React from 'react'
import Yuzbakim1 from '../../components/yuzbakim1.jsx'
import Yuzbakim2 from '@/app/components/yuzbakim2.jsx'
import Phone_yuzbakim from '@/app/components/phone_yuzbakim.jsx'

export const metadata = {
  title: 'تجميل وعناية الوجه - صالون أحلى ملاك',
  description: 'خدمات تجميل وعناية الوجه المتقدمة. علاجات احترافية وتقنيات حديثة في حلب',
  keywords: 'تجميل وجه، عناية الوجه، علاجات وجه، فاشيال، facial',
};

function page() {
  return (
    <div>
      <div className='md:block hidden'> <Yuzbakim1 /> </div>
      <div className='md:hidden block'> <Phone_yuzbakim /> </div>
        <Yuzbakim2 />
    </div>
  )
}

export default page
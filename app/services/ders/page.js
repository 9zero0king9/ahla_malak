import React from 'react'
import Ders1 from '../../components/ders1.jsx'
import Ders2 from '@/app/components/ders2.jsx'
import Phone_ders from '@/app/components/phone_ders.jsx'

export const metadata = {
  title: 'دورات تعليمية - صالون أحلى ملاك | Ahla Malak Salon',
  description: 'دورات تعليمية احترافية من خبراء صالون أحلى ملاك في حلب. تعلمي تقنيات التجميل الحديثة من الأفضل',
  keywords: 'دورات تعليم تجميل، دورات تدريبية، تعليم تجميل، حلب، courses',
};

function page() {
  return (
    <div>
       <div className='md:block hidden'> <Ders1 /> </div> 
       <div className='md:hidden block'> <Phone_ders /> </div>
        <Ders2 />
    </div>
  )
}

export default page
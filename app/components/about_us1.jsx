import React from 'react'
import about_us2 from '../assets/png/aboutus.png';
function about_us1() {
  return (
    <div
        className='pt-30 px-20 pb-10 bg-cover'
        style={{    
                    backgroundImage: `url(${about_us2.src})`,
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '90vh',
                    
                }}
        >

    </div>
  )
}

export default about_us1
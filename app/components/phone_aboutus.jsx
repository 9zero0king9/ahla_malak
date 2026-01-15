import React from 'react'
import Link from 'next/link';
import phone22 from '@/app/assets/phone-assets/png/phone_aboutus.png';
import "../globals.css";

function phone_layout() {
  return (

      <div
        className="w-full bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${phone22.src})`,
          backgroundPosition: 'top',
          width: '100%',
          height: '90vh',
        }}
      >
        
      </div>
      
  

  )
}

export default phone_layout
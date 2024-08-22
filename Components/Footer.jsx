import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @BlogX</p>
        <div className='flex'>
        
        <a href="mailto:saisakethram.g@gmail.com" className="text-white hover:text-gray-200">
          saisakethram.g@gmail.com
        </a>
        </div>
    </div>
  )
}

export default Footer
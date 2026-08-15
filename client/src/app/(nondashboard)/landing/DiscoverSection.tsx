import React from 'react'
import Image from 'next/image'

const DiscoverSection = () => {
  return (
    <div className='w-full h-12 py-48'>
      <Image
       src="/landing-discover-bg.jpg"
       alt='discover'
       fill
       className='object-cover object-center'
       
      />
    </div>
  )
}

export default DiscoverSection

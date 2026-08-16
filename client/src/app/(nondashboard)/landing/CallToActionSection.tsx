import React from 'react'

const CallToActionSection = () => {
  return (
    <div className='relative'>
      <div className='relative bg-cover bg-center' 
           style={{backgroundImage: "url{'/landing-call-to-action.jpg'}"}}>
           
           <div className='relative inset-0 bg-black/50'/>

           <div className='px-6 py-12 grid grid-cols-1 md:grid-cols-2 text-center'>
             <div>Find Your Dream Rental Property</div>
           </div>


           </div>
    </div>
  )
}

export default CallToActionSection

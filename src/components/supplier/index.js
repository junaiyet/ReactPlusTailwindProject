import React from 'react'

function Suplier() {
  return (
<section className='md:mt-[78px] mt-9'>
<div className='max-w-container  mx-auto 	px-2.5 md:px-0'>
      <div className='md:flex justify-between'>
         <div className="md:max-w-[289px]">
        <h2 className='font-pop font-bold text-3xl md:text-5xl md:leading-[72px]'> The biggest supplier on the country</h2>
         </div>
         <div className="md:max-w-[651px] flex items-center">
         <p className='font-pop font-medium text-base'>
         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
         </p>
         </div>
      </div>
     </div>
     <div className="flex flex-col  sml:flex-row flex-wrap md:flex-nowrap  md:justify-between md:mt-24 mt-12 px-2.5 md:px-0">
      <div className="img sml:w-2/4 md:w-auto">
        <picture>
          <img className='w-full' src="images/supplier1.png" alt="" loading='lazy' />
        </picture>
      </div>
      <div className="img sml:w-2/4 md:w-auto">
        <picture>
          <img className='w-full' src="images/supplier1.png" alt="" loading='lazy' />
        </picture>
      </div>
      <div className="img sml:w-2/4 md:w-auto">
        <picture>
          <img className='w-full' src="images/supplier1.png" alt="" loading='lazy' />
        </picture>
      </div>
      <div className="img sml:w-2/4 md:w-auto">
        <picture>
          <img className='w-full' src="images/supplier1.png" alt="" loading='lazy' />
        </picture>
      </div>
     </div>
</section>
      
  )
}

export default Suplier
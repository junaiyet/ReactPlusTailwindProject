import React from 'react'

function Banner() {
  return (
    <div  style={{background:"url(images/banner.png)"}}>
        <div className="h-full w-full bg-darklight sm:py-24 sm:pl-2.5 md:py-64">
        <div className='max-w-container  mx-auto 	'>
            <h1 className='font-pop font-bold text-[32px] md:text-[64px] text-white md:w-[842px] mb-7 '>We exist since 1975 on the oil and gas industry.</h1>
            <a href="#" className='font-pop font-semibold text-base text-white bg-primary inline-block border border-solid border-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear	duration-300 '>CONTACT</a>

        </div>
        </div>
    </div>
  )
}

export default Banner
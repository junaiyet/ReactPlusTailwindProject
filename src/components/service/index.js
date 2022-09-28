import React from 'react'

function Service() {
  return (
   <section className='mt-7 '>
    <div className='flex flex-wrap '>
        <div className="w-2/4 flex justify-end items-center ">
        <div>            
            <h3 className="font-pop font-bold text-5xl leading-[64px]' mr-36">Our Services</h3>
             <p className="font-pop font-medium text-base w-[405px] mr-36">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
        </div>
    
        <div className="w-2/4  " style={{background:"url(images/service1.png)"}}>
            <div className="h-full w-full bg-darklight py-36 px-28">
         <h3 className="font-pop font-bold text-4xl text-white"> Modern natural oil and gas refineries.</h3>
         <a href="#" className='mt-5 font-pop font-semibold text-base text-white bg-primary inline-block border border-solid border-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear	duration-300 '>CONTACT</a>

            </div>
        </div>  
        <div className="w-2/4  " style={{background:"url(images/service1.png)"}}>
            <div className="h-full w-full bg-darklight py-36 px-28">
         <h3 className="font-pop font-bold text-4xl text-white"> Modern natural oil and gas refineries.</h3>
         <a href="#" className='mt-5 font-pop font-semibold text-base text-white bg-primary inline-block border border-solid border-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear	duration-300 '>CONTACT</a>

            </div>
        </div>  
 
    </div>
   </section>
  )
}

export default Service
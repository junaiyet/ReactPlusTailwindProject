import React from 'react'

function Company() {
  return (
    <section >
      <div className="bg-secondary p-36">
        <div className='max-w-container  mx-auto'>
         <div className="flex">
          <div className="w-1/2 bg-primary py-24	px-16	" >
          <h2 className='font-pop font-bold text-4xl leading-[54px] text-white w-[262px]'> Learn more about our company</h2>
          </div>
          <div className="w-4/5 flex justify-center items-center" style={{background:"url(images/company.png)"}}>
          <a href="#" className='mt-5 font-pop font-semibold text-base text-primary bg-white inline-block border border-solid border-white py-3 px-8 hover:bg-transparent hover:border-primary ease-linear	duration-300 '>Learn More</a>

          </div>
         </div>
        </div>

      </div>
      <div className="my-28	">
           <div className='max-w-container  mx-auto justify-center'>
            <div className="flex gap-6	item-center ">
              <div className="img">
                <picture>
                  <img src="images/companyLogo.png" alt="" />
                </picture>
              </div>
              <div className="img">
                <picture>
                  <img src="images/companyLogo.png" alt="" />
                </picture>
              </div>
              <div className="img">
                <picture>
                  <img src="images/companyLogo.png" alt="" />
                </picture>
              </div>
              <div className="img">
                <picture>
                  <img src="images/companyLogo.png" alt="" />
                </picture>
              </div>
            </div>
           </div>
      </div>
    </section>
  )
}

export default Company
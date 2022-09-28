import React from 'react'

function Blog() {
  return (
   <section className='bg-secondary p-36'>
       <div className='max-w-container  mx-auto'>
        <div className="flex gap-14	">
            <div className="group" style={{background:"url(images/blog.png)"}}>
            <div className="h-full w-full bg-darklight py-16 px-11">
                <h4 className="font-pop font-bold text-white text-2xl mb-4  group-hover:text-primary">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='mt-5 font-pop font-semibold text-base text-primary bg-white inline-block border border-solid border-white py-2.5	 px-5 hover:bg-transparent hover:border-primary ease-linear	duration-300 '>Learn More</a>
            </div>
            </div>
            <div className="" style={{background:"url(images/blog.png)"}}>
            <div className="h-full w-full bg-darklight py-16 px-11">
                <h4 className="font-pop font-bold text-white text-2xl mb-4">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='mt-5 font-pop font-semibold text-base text-primary bg-white inline-block border border-solid border-white py-2.5	 px-5 hover:bg-transparent hover:border-primary ease-linear	duration-300 '>Learn More</a>
            </div>
            </div>
            <div className="" style={{background:"url(images/blog.png)"}}>
            <div className="h-full w-full bg-darklight py-16 px-11">
                <h4 className="font-pop font-bold text-white text-2xl mb-4">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='mt-5 font-pop font-semibold text-base text-primary bg-white inline-block border border-solid border-white py-2.5	 px-5 hover:bg-transparent hover:border-primary ease-linear	duration-300 '>Learn More</a>
            </div>
            </div>
 


    
        </div>
       </div>
   </section>
  )
}

export default Blog
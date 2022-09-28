import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';

function Header() {
  return (
    <header className='bg-black py-3.5 border-b-4	 border-solid border-yellow_border'>
        <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='sml:flex'>
            <div className='sml:w-9/12  sml:flex'>
                <p className="font-pop font-normal	text-xs	relative pl-6 text-white after:absolute after:top-0 after:right-[-28px] after:w-0.5 after:h-full after:content-[''] after:bg-yellow_border"><AiOutlineMail className='absolute left-0 top-0	text-lg' /> mail@yourcompany.com</p>

                <p className='font-pop font-normal	text-xs	relative pl-6 text-white sml:ml-14	my-2.5 sml:my-0'><BiPhoneCall className='absolute left-0 top-0 text-lg' /> +896 120 5889 (Toll free)</p>
            </div>
            <div className='sml:w-3/12 flex sml:justify-end	gap-x-5	'>
                <FiFacebook className='text-white text-lg'/>
                <FiFacebook className='text-white text-lg'/>
                <FiFacebook className='text-white text-lg'/>
                <FiFacebook className='text-white text-lg'/>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
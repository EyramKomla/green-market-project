import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


export default function NavButton({text}) {
  return (
    <div className='flex flex-row justify-center gap-2 items-center  w-35 h-10 bg-[#468847] rounded-xs shadow-md'>
        <p className='text-sm italic font-medium text-white'>{text}</p>
        <FaArrowRight size={15} color='white'/>
    </div>
  )
}

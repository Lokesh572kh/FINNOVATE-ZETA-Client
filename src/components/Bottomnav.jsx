import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

//this will be used in the course page to navigate to next or previous module,it will pe placed at the bottom of the page

const Bottomnav = () => {
  return (
        <div className='flex gap-4 justify-center text-gray-600 items-center mt-12'>
            <button className='p-2 '>
            {/* Previous */}
            <FaCircleArrowLeft className='text-[46px] hover:text-gray-800'/>
            </button>
            <button className='p-2 '>
            {/* Previous */}
            <FaCircleArrowRight className='text-[46px] hover:text-gray-800'/>
            </button>
        </div>
      
  )
}

export default Bottomnav
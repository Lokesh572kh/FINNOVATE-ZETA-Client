import React from 'react'
//this will be a page that will show content that has a heading and its content
//it will have a side navigation bar that will show the different modules

const Learning = ({title,def,index}) => {
  return (
    <div className='flex flex-col  items-center font-poppins mt-12'>
        <h1 className='text-[36px] text-gray-800'>{title}</h1>
        <p className='bg-gray-200 mt-6 text-gray-700 max-w-[600px] text-[20px] p-4 leading-8  rounded-lg '>{def}</p>
    </div>
  )
}

export default Learning
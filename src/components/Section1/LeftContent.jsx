import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/4'>
        <div className='p-5'>
            <h3 className='text-6xl mb-7 font-bold'>Prospective <br /> <span className='text-gray-600' >Customer</span> <br /> Segmentation</h3>
            <p className='text-xl font-medium text-gray-500'>Prospective customer segmentation divides potential customers into groups based on shared characteristics like demographics, behavior, or interests to tailor marketing strategies and improve conversion rates effectively.</p>
        </div>
        <div className='text-8xl'>
            <i className="ri-arrow-right-up-line"></i>
        </div>

    </div>
  )
}

export default LeftContent
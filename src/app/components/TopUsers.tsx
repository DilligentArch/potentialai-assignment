import Image from 'next/image'
import React from 'react'

function TopUsers() {
  return (
    <div className='w-[290px] h-[346px] rounded-2xl border-1 border-gray-200 mx-auto absolute lg:top-60 lg:left-100 bg-[#FFFFFF] md:top-50 md:left-100 top-170 left-22'>
        <div className='w-11/12 mx-auto mt-10 '>
        <h4 className='text-2xl font-bold '>
            Top Users
        </h4>
        <Image src={"/Profiles1.png"} alt="top users" width={200} height={100} className=' mt-5'/>
        </div>
        <div className='bg-gray-200 w-11/12 mx-auto mt-5 p-4 rounded-2xl '>
        <p className='text-[#686868] font-semibold text-sm font-roboto'>
            Enter Amount
        </p>
        <div className='flex items-center justify-between mt-3 '>
            <h1 className='text-xl font-semibold '>$50000</h1>
            <Image src={"/visa.png"} alt="arrow up" width={50} height={80}/>
        </div>
        
        </div>
        <div className='w-11/12 bg-[#BFE5A6] mx-auto  rounded-full p-2 text-center mt-5 '>
            <p>
                See detail
            </p>
        </div>
    </div>
  )
}

export default TopUsers
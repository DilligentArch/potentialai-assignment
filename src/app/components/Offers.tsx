import Image from 'next/image'
import React from 'react'

function Offers() {
    return (
        <div className='w-full sm:w-10/12 md:w-8/12 lg:w-[550px] lg:h-[706px] h-auto mx-auto rounded-xl p-4 sm:p-6 md:p-8  lg:ml-40 mt-72 md:mt-0'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold font-roboto'>
                CASA offers instant, flexible funding from card transactions.
            </h1>
            <p className='text-sm sm:text-base md:text-lg text-[#686868] mt-4 sm:mt-5'>
                CASA stands out by offering fast, flexible, and transparent funding for business owners who need immediate cash flow from credit card transactions. Here’s what makes us unique
            </p>
            <div className='mt-6 sm:mt-8 md:mt-10 flex gap-3 items-center'>
                <div className='rounded-full bg-[#DFEDE3] p-2 flex items-center justify-center'>
                    <Image src={"/moneys.png"} alt="offers" width={20} height={25} />
                </div>
                <p className='text-base sm:text-lg md:text-2xl text-[#686868] font-bold font-roboto'>
                    Instant Cash, No Waiting
                </p>
            </div>
            <div className='flex gap-3 items-center mt-3 sm:mt-4'>
                <div className='rounded-full bg-[#DFEDE3] p-2 flex items-center justify-center'>
                    <Image src={"/card-slash.png"} alt="offers" width={20} height={25} />
                </div>
                <p className='text-base sm:text-lg md:text-2xl text-[#686868] font-bold font-roboto'>
                    No Hidden Fees, No Surprises
                </p>
            </div>
            <div className='flex gap-3 items-center mt-3 sm:mt-4'>
                <div className='rounded-full bg-[#DFEDE3] p-2 flex items-center justify-center'>
                    <Image src={"/card-add.png"} alt="offers" width={20} height={25} />
                </div>
                <p className='text-base sm:text-lg md:text-2xl text-[#686868] font-bold font-roboto'>
                    Seamless POS & Payment Processor
                </p>
            </div>
            <div className='flex gap-3 items-center mt-3 sm:mt-4'>
                <div className='rounded-full bg-[#DFEDE3] p-2 flex items-center justify-center'>
                    <Image src={"/card-tick.png"} alt="offers" width={20} height={25} />
                </div>
                <p className='text-base sm:text-lg md:text-2xl text-[#686868] font-bold font-roboto'>
                    Secure & Compliant Transactions
                </p>
            </div>
            <div className="bg-[#0F4E23] cursor-pointer text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 mt-8 sm:mt-10 mb-8 sm:mb-10 hover:bg-green-800 transition duration-300 ease-in-out w-full sm:w-3/4 md:w-3/5 text-center">
                Become a Member
            </div>
        </div>
    )
}

export default Offers

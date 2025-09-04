import React from 'react'

function AboutCasa() {
    return (
        <div className='w-11/12 mx-auto mt-40 flex flex-col lg:flex-row justify-center items-center gap-6'>
            <div className='w-full lg:w-4/5 text-center lg:text-left'>
                <p className='text-[#0F4E23] text-lg sm:text-xl bg-[#DFEDE3] rounded-full w-fit px-6 py-2 mx-auto lg:mx-0 mb-4'>
                    About Casa Service
                </p>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black font-roboto font-bold mt-6 leading-snug'>
                    Revolutionizing Cash Flow
                    for Business Owners!
                </h1>
            </div>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <p className='text-base sm:text-lg lg:text-2xl text-[#686868] mb-4'>
                    Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.
                </p>
                <div className="bg-[#0F4E23] cursor-pointer text-white rounded-full px-6 py-3 mt-6 mb-6 hover:bg-green-800 transition duration-300 ease-in-out w-fit mx-auto lg:mx-0">
                    Join Now
                </div>
            </div>
        </div>
    )
}

export default AboutCasa

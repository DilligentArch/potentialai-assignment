import React from 'react'
import ReusableCasaServiceCard from '../ReusableComponents.tsx/ReusableCasaServiceCard'

function AboutCasa() {
    return (
        <div>
            <div className='w-11/12 mx-auto mt-40 flex flex-col lg:flex-row justify-center items-center gap-6 mb-30'>
                <div className='w-full lg:w-4/5 text-center lg:text-left'>
                    <p className='text-[#0F4E23] text-base sm:text-lg md:text-xl bg-[#DFEDE3] rounded-full w-fit px-4 sm:px-6 py-2 mx-auto lg:mx-0 mb-4'>
                        About Casa Service
                    </p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-roboto font-bold mt-6 leading-snug'>
                        Revolutionizing Cash Flow
                        for Business Owners!
                    </h1>
                </div>
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <p className='text-sm sm:text-base md:text-lg lg:text-2xl text-[#686868] mb-4 px-2 sm:px-0'>
                        Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.
                    </p>
                    <div className="bg-[#0F4E23] cursor-pointer text-white rounded-full px-5 sm:px-6 py-2 sm:py-3 mt-6 mb-6 hover:bg-green-800 transition duration-300 ease-in-out w-fit mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
                        Join Now
                    </div>
                </div>
            </div>
            
            <div className='w-11/12 mx-auto mt-10 mb-20 flex flex-col lg:flex-row justify-center items-center gap-6'>
                <ReusableCasaServiceCard
                    title="Secure and Instant Cash Advances"
                    description="No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly."
                    icon="/cash-banknote.png"
                    alt="Cash banknote"
                    titleColor="text-black"
                    bgColor="bg-[#F8F8F8]"
                    descriptionColor="text-[#686868]"
                    bgCircleColor="bg-[#E0F0E5]"
                />
                
                <ReusableCasaServiceCard
                    title="Transparent and Fair Pricing Process"
                    description="No Hidden Fees, No Surprises Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect."
                    icon="/cash.png"
                    alt="Cash"
                    titleColor="text-black"
                    bgColor="bg-[#F8F8F8]"
                    descriptionColor="text-[#686868]"
                    bgCircleColor="bg-[#E0F0E5]"
                />
                
                <ReusableCasaServiceCard
                    title="Flexible and Secure Payout Options"
                    description="We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods"
                    icon="/credit-card.png"
                    alt="Credit card"
                    titleColor="text-white"
                    bgColor="bg-[#0F4E23]"
                    descriptionColor="text-[#E0F0E5]"
                    bgCircleColor="bg-[#E0F0E5]"
                />
            </div>
        </div>
    )
}

export default AboutCasa

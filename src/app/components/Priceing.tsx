import React from 'react'
import ReUsableHeader from '../ReusableComponents.tsx/ReUsableHeader'
import Image from 'next/image'
import ReUsablePricingCard from '../ReusableComponents.tsx/ReUsablePricingCard'

function Priceing() {
    return (
        <div>
            <ReUsableHeader
                text1="Pricing"
                headerText=" Simple, Transparent Pricing  No Hidden Fees!"
                text2="Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA."
            ></ReUsableHeader>
            <div className='lg:flex justify-center items-center gap-10 w-11/12 mx-auto mb-40'>
                <ReUsablePricingCard
                    text1="Basic Plan"
                    numb="2%"
                    text2="Perfect for individuals just getting started."
                />
                <div className="bg-[#0F4E23] mt-20 rounded-2xl p-4 w-full sm:w-10/12 md:w-6/12 lg:w-4/12 mx-auto">
                    <div className="w-11/12 mx-auto">
                        <h1 className="font-bold font-roboto text-xl sm:text-2xl text-white text-center sm:text-left">
                            Enterprise Plan
                        </h1>

                        <div className="mt-5 mb-6 sm:mb-20 text-center sm:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Custom Rate
                            </h1>
                        </div>

                        <div className="bg-[#F1F68E] cursor-pointer rounded-full px-6 py-3 mt-6 mb-6 w-10/12 sm:w-8/12 md:w-11/12 mx-auto text-lg sm:text-xl font-semibold text-center">
                            Get Started
                        </div>

                        <p className="text-base sm:text-xl font-semibold mt-3 text-white pt-1 pb-5 text-center sm:text-left">
                            Tailored for high-volume businesses
                        </p>

                        <div className="mx-auto bg-white rounded-2xl p-4 sm:p-5 md:p-6 mt-6 mb-6">
                            <h1 className="text-lg sm:text-xl font-semibold text-center sm:text-left">What’s Included?</h1>

                            {/* 1 */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
                                <div className="rounded-full p-2 bg-[#F1F68E]">
                                    <Image src={'/VectorClick.png'} alt="Vector Click" width={16} height={16} />
                                </div>
                                <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
                                    Instant Fund Transfers
                                </p>
                            </div>

                            {/* 2 */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
                                <div className="rounded-full p-2 bg-[#F1F68E]">
                                    <Image src={'/VectorClick.png'} alt="Vector Click" width={16} height={16} />
                                </div>
                                <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
                                    Real-time Transaction Monitoring
                                </p>
                            </div>

                            {/* 3 */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
                                <div className="rounded-full p-2 bg-[#F1F68E]">
                                    <Image src={'/VectorClick.png'} alt="Vector Click" width={16} height={16} />
                                </div>
                                <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
                                    Seamless POS Integration
                                </p>
                            </div>

                            {/* 4 */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
                                <div className="rounded-full p-2 bg-[#F1F68E]">
                                    <Image src={'/VectorClick.png'} alt="Vector Click" width={16} height={16} />
                                </div>
                                <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
                                    24/7 Customer Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <ReUsablePricingCard
                    text1="Growth Plan"
                    numb="1.5%"
                    text2=" For businesses processing up to $10,000 – $50,000/month"
                />

            </div>
        </div>
    )
}

export default Priceing
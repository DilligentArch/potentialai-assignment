import Image from 'next/image'
import React from 'react'

function FactoringPossibleAmount() {
    return (

        <div className="w-11/12 mx-auto md:w-7/12 lg:w-[457px] lg:h-[665px] border border-gray-100 rounded-xl pt-5  ">
            <div className="flex flex-col  mx-auto p-4 rounded-xl mt-5 bg-[#E0F0E5] ">
                <div className="rounded-2xl p-4  mt-5 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-2 md:w-[307px] mx-auto ">
                    <div className="rounded-full bg-[#BFE5A6] p-3 flex items-center justify-center">
                        <Image src={"/current.png"} alt="balance" width={17} height={15} className='md:w-10 lg:w-6' />
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="  md:text-2xl sm:text-lg font-roboto font-semibold">
                            Factoring Possible Amount.
                        </h2>

                    </div>
                </div>

                <div className=" rounded-xl mt-1 bg-white my-10 p-3 ">
                    <h1 className='text-2xl text-[#686868] text-center mb-5'>
                        Available amount
                    </h1>
                    <div className='flex justify-center items-center gap-6'>
                        <h1 className='text-3xl font-semibold font-roboto'>
                            $15,375
                        </h1>
                        <p className='text-lg font-roboto font-semibold '>
                            USD
                        </p>
                    </div>
                </div>
                <div className='rounded-xl mt-5 bg-white my-10 pb-3'>
                    <div className="rounded-2xl p-4  mt-5 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-2 md:w-[307px] mx-auto ">
                        <div className="rounded-full bg-[#BFE5A6] p-3 flex items-center justify-center">
                            <Image src={"/currency-dollar.png"} alt="balance" width={17} height={15} className='md:w-10 lg:w-8' />
                        </div>

                        <div className="text-center sm:text-left">
                            <h2 className="  md:text-2xl sm:text-lg font-roboto font-semibold">
                                Factored amount vs. remaining balance 
                            </h2>

                        </div>
                    </div>
                    <div className='w-11/12 mx-auto mt-1'>
                        <Image src={"/Processbar.png"} alt="Processbar" width={300} height={100}></Image>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default FactoringPossibleAmount
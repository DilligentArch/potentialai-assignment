import Image from 'next/image'
import React from 'react'
import ReUsableLowerCard from '../ReusableComponents.tsx/ReUsableLowerCard'

function BalanceCard() {
    return (
        <div className='border-1 border-gray-100 rounded-xl  p-2 w-[450px] h-[706px]   mx-auto'>
            <div className='w-11/12 mx-auto p-4 bg-[#F1F68E] rounded-xl mt-5'>
                <div className='rounded-2xl p-4 bg-white mt-5 flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:gap-2'>
                    <Image src={"/Profile.png"} alt="balance" width={50} height={50} />
                    <div className='text-center sm:text-left'>
                        <h2 className='text-xl sm:text-2xl font-roboto font-bold'>Maria kosta</h2>
                        <p className='font-semibold text-[#686868] text-sm'>Maria@mail.com</p>
                    </div>
                    <h1 className='text-xl sm:text-2xl font-bold text-[#0F4E23] sm:ml-auto font-roboto mt-2 sm:mt-0'>
                        +$10K
                    </h1>
                </div>

                {/* balance */}
                <div className='bg-white rounded-2xl mt-5 p-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <div className='text-center sm:text-left'>
                            <p className='text-[#686868] text-sm font-semibold font-roboto'>
                                Total balance
                            </p>
                            <h1 className='font-semibold text-lg sm:text-xl font-roboto sm:mt-10'>$12000.00</h1>
                        </div>
                        <div className=' sm:mt-0 sm:pl-10 text-center sm:text-left'>
                            <p className='w-16 sm:w-12 rounded-full bg-[#F1F68E] p-3 text-green-700 font-bold text-sm font-roboto mx-auto sm:mx-0  sm:mb-10'>
                                10%
                            </p>
                            <p className='text-sm text-[#686868] font-semibold'>discount rate</p>
                        </div>
                    </div>

                    <div className='rounded-2xl p-4 bg-[#DAFFC2] mt-3 flex items-center justify-center sm:justify-between'>
                        <p className='font-semibold text-sm'>See detail</p>
                        <Image src={"/vector.png"} alt="arrow" width={15} height={20} className='ml-2 sm:ml-0' />
                    </div>
                </div>
            </div>
            <ReUsableLowerCard
                t1="Transactions for Early Payment"
                t2="Every morning, your previous day’s credit card transactions are automatically submitted for funding."
                t3=" No waiting for 30-60 day settlements"
                t4="Transparent discount rates"
            ></ReUsableLowerCard>
        </div>
    )
}

export default BalanceCard

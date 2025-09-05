import Image from 'next/image'
import React from 'react'
import ReUsableLowerCard from '../ReusableComponents.tsx/ReUsableLowerCard'

function ReceieveMoneyAndUsersCard() {
  return (
    <div className=' w-11/12 mx-auto border-1 border-gray-100 rounded-xl max-w-96 p-2  sm:w-10/12 md:w-8/12 lg:w-96 h-[706px]'>
      <div className='mx-auto p-4 bg-[#DAFFC2] rounded-xl mt-5 h-[360px] '>
        
        {/* Top section */}
        <div className='rounded-2xl p-4 bg-white mt-5 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-2 '>
          <div className='rounded-full bg-[#DFEDE3] p-3 flex items-center justify-center'>
            <Image src={"/leaf.png"} alt="balance" width={17} height={15} />
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-base sm:text-lg font-roboto font-semibold'>
              Receive Money from card
            </h2>
            <p className='font-semibold text-[#686868] text-xs sm:text-sm'>
              Cash Deposited Within 24 Hours
            </p>
          </div>
        </div>

        {/* Users section */}
        <div className='bg-white rounded-2xl mt-10 p-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0'>
            <h1 className='font-bold text-xl sm:text-2xl font-roboto text-center sm:text-left'>
              Recent User
            </h1>
            <p className='font-roboto text-xs sm:text-sm text-[#686868] cursor-pointer'>
              View All
            </p>
          </div>

          <div className='flex justify-center sm:justify-start mt-4'>
            <Image
              src={"/Profiles.png"}
              alt="user"
              width={230}
              height={200}
              className=' '
            />
          </div>
        </div>
      </div>
      <ReUsableLowerCard
        t1="Receive Funds & Grow"
        t2="Every morning, your previous day’s credit card transactions are automatically submitted for funding."
        t3="Same-day or next-day payouts"
        t4="Flexible repayment from future sales"
      ></ReUsableLowerCard>
    </div>
  )
}

export default ReceieveMoneyAndUsersCard

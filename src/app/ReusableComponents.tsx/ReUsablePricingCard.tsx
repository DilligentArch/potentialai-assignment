import Image from 'next/image'
import React from 'react'

type Props = {
  text1: string;
  numb: string;
  text2: string;
}

function ReUsablePricingCard({ text1, numb, text2 }: Props) {
  return (
    <div className="bg-[#F2F2F2] mt-20 rounded-2xl p-4 w-full sm:w-11/12 md:w-8/12 lg:w-4/12 mx-auto">
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold font-roboto text-xl sm:text-2xl lg:text-2xl text-[#686868]">
          {text1}
        </h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-end  gap-4 sm:gap-10 mt-5 mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-roboto font-bold">
            {numb}
          </h1>
          <p className="font-semibold text-center sm:text-left text-[#686868]">
            Discount Rate
          </p>
        </div>

        <div className="bg-white cursor-pointer rounded-full px-6 py-3 mt-6 mb-6 w-10/12 sm:w-8/12 md:w-11/12 mx-auto text-base sm:text-xl font-semibold text-center">
          Get Started
        </div>

        <p className="text-base sm:text-lg lg:text-xl font-semibold mt-3 text-[#686868]">
          {text2}
        </p>

        <div className="mx-auto bg-white rounded-2xl p-4 sm:p-5 md:p-6 mt-6 mb-6">
          <h1 className="text-lg sm:text-xl font-semibold">What’s Included?</h1>

          {/* 1 */}
          <div className="flex items-center gap-2 sm:gap-3 mt-4">
            <div className="rounded-full p-2 bg-[#F1F68E]">
              <Image src={'/vectorClick.png'} alt="Vector Click" width={16} height={16} />
            </div>
            <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
              Instant Fund Transfers
            </p>
          </div>

          {/* 2 */}
          <div className="flex items-center gap-2 sm:gap-3 mt-4">
            <div className="rounded-full p-2 bg-[#F1F68E]">
              <Image src={'/vectorClick.png'} alt="Vector Click" width={16} height={16} />
            </div>
            <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
              Real-time Transaction Monitoring
            </p>
          </div>

          {/* 3 */}
          <div className="flex items-center gap-2 sm:gap-3 mt-4">
            <div className="rounded-full p-2 bg-[#F1F68E]">
              <Image src={'/vectorClick.png'} alt="Vector Click" width={16} height={16} />
            </div>
            <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
              Seamless POS Integration
            </p>
          </div>

          {/* 4 */}
          <div className="flex items-center gap-2 sm:gap-3 mt-4">
            <div className="rounded-full p-2 bg-[#F1F68E]">
              <Image src={'/vectorClick.png'} alt="Vector Click" width={16} height={16} />
            </div>
            <p className="text-[#686868] text-base sm:text-lg font-semibold font-roboto">
              24/7 Customer Support
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReUsablePricingCard

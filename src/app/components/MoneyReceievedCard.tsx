import Image from 'next/image'
import React from 'react'

function MoneyReceievedCard() {
  return (
    
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-[550px] lg:h-[706px] h-auto  border border-gray-100 rounded-xl pt-5 pb-10 ">
      <div className="mx-auto p-4 rounded-xl mt-5 bg-[#E0F0E5] h-auto ">
        <div className="rounded-2xl p-4 bg-white mt-5 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-2 md:w-[357px]">
          <div className="rounded-full bg-[#F1F68E] p-3 flex items-center justify-center">
            <Image src={"/leaf.png"} alt="balance" width={17} height={15} />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-roboto font-semibold">
              Receive Money from card
            </h2>
            <p className="font-semibold text-[#686868] text-xs sm:text-sm">
              Cash Deposited Within 24 Hours
            </p>
          </div>
        </div>

        <div className=" rounded-xl mt-5 bg-white my-10 md:w-[357px]">
          <div className="rounded-2xl p-4 bg-white flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:gap-2 ">
            <div className="rounded-full p-2 bg-[#0F4E23]">
              <Image src={"/ZigzagIcon.png"} alt="balance" width={20} height={20} />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#686868] text-2xl">Total sales :</p>
            </div>

            <h1 className="text-4xl sm:text-2xl lg:text-2xl font-bold text-[#686868] sm:ml-auto font-roboto mt-2 sm:mt-0">
              $12,500
            </h1>
          </div>

          <div className="w-11/12 mx-auto">
           
            <Image
              src={"/Salesreport.png"}
              alt="graph"
              width={400}
              height={200}
              className="w-full max-w-[400px] h-auto mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyReceievedCard

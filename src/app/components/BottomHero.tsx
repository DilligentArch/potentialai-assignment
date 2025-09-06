import React from 'react'

function BottomHero() {
  return (
    <div className="w-11/12 mx-auto rounded-xl bg-[#0F4E23] p-5 mb-10">
      <h1 className="w-full sm:w-10/12 md:w-9/12 mx-auto mt-10 sm:mt-16 md:mt-20 text-center font-roboto text-3xl sm:text-5xl md:text-4xl lg:text-7xl text-white font-black">
        Unlock Instant Cash Flow for Your Business!
      </h1>

      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-6 sm:mt-8 md:mt-10 w-full sm:w-10/12 md:w-9/12 mx-auto">
        Running a business shouldn’t mean waiting weeks for credit card payments to clear. With CASA, you can convert your daily transactions into instant cash,
      </p>

      <div className="bg-[#F1F68E] font-semibold text-sm sm:text-base md:text-lg cursor-pointer rounded-full px-6 py-3 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 w-8/12 sm:w-6/12 md:w-7/12 mx-auto text-center">
        Let’s get started
      </div>
    </div>
  )
}

export default BottomHero

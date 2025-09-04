import Image from 'next/image'
import React from 'react'

function TrustedByCompanies() {
  return (
    <div className="bg-[#0F4E23] h-auto lg:h-[168px]">
      <div className="w-11/12 h-full mx-auto text-center text-white py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3">
        
        {/* Left text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl border-b-2 lg:border-b-0 lg:border-r-2 border-[#BFE5A6] pb-4 lg:pb-0 lg:pr-6">
          Trusted by <br className="hidden sm:block"/> Top Companies
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-10 mt-4 lg:mt-0">
          <Image src="/Cubyn.png" alt="Cubyn" width={100} height={70} className="w-20 sm:w-24 md:w-28 lg:w-[120px] h-auto"/>
          <Image src="/bastion.png" alt="Bastion" width={110} height={80} className="w-24 sm:w-28 md:w-32 lg:w-[140px] h-auto"/>
          <Image src="/Digits.png" alt="Digits" width={110} height={80} className="w-24 sm:w-28 md:w-32 lg:w-[140px] h-auto"/>
          <Image src="/Pipe.png" alt="Pipe" width={80} height={50} className="w-16 sm:w-20 md:w-24 lg:w-[100px] h-auto"/>
          <Image src="/Ramp.png" alt="Ramp" width={100} height={70} className="w-20 sm:w-24 md:w-28 lg:w-[120px] h-auto"/>
        </div>
      </div>
    </div>
  )
}

export default TrustedByCompanies

import Image from 'next/image'
import React from 'react'

type ReUsableLowerCardProps = {
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    padding?: string;
}

export default function ReUsableLowerCard({ t1, t2, t3, t4, padding }: ReUsableLowerCardProps) {
  return (
     <div className="rounded-2xl w-11/12 mx-auto">
        <h2 className="text-lg md:text-xl lg:text-2xl font-roboto font-bold py-3 md:py-4">
          {t1}
        </h2>
        <p className={`text-sm md:text-base lg:text-lg text-[#686868] text-left ${padding ? padding : ''}`}>
         {t2}
        </p>
      <div className="flex justify-left gap-3 items-center mt-4 md:mt-5 ">
        <div className="rounded-full p-2 md:p-2 bg-green-200 flex items-center justify-center">
          <Image src={'/vectorClick.png'} alt="Vector Click" width={12} height={12} />
        </div>
        <p className="text-[#686868] font-semibold text-sm md:text-base lg:text-base">
         {t3}
        </p>
      </div>
      <div className="flex justify-left gap-3 items-center mt-4 md:mt-5">
        <div className="rounded-full p-2 md:p-2 bg-green-200 flex items-center justify-center">
          <Image src={'/vectorClick.png'} alt="Vector Click" width={12} height={12} />
        </div>
        <p className="text-[#686868] font-semibold text-sm md:text-base lg:text-base">
         {t4}
        </p>
      </div>
      </div>
  )
}

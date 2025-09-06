import Image from 'next/image'
import React from 'react'

type ReviewCardProps = {
  logo: string;
  text1: string;
  text2: string;
  img: string;
  name: string;
  role: string;
}

function ReUsableReviewCard({ text1, text2, img, name, role, logo }: ReviewCardProps) {
  return (
    <div className="w-full sm:w-11/12 md:w-9/12 lg:w-8/12 mx-auto bg-[#F8F8F8] rounded-2xl p-6 sm:p-8 lg:p-10 mb-20">
      {/* top images: stack on mobile, row on tablet+ */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between w-11/12 mx-auto gap-4 mt-3 sm:mt-5">
        <Image
          src={"/stars.png"}
          alt="stars"
          width={160}
          height={50}
          className="w-[160px] h-auto"
        />
        <Image
          src={logo}
          alt="logo"
          width={125}
          height={50}
          className="w-[125px] h-auto"
        />
      </div>

      {/* text block */}
      <div className="mt-6 sm:mt-10 lg:mt-20">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">{text1}</h1>
        <p className="text-[#686868] text-base sm:text-lg mt-3 sm:mt-5">
          {text2}
        </p>
      </div>

      {/* reviewer info */}
      <div className="rounded-2xl px-4 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-2">
        <Image
          src={img}
          alt="reviewer"
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-roboto font-bold">{name}</h2>
          <p className="font-semibold text-[#686868] text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default ReUsableReviewCard

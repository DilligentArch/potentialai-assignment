import Image from 'next/image'
import React from 'react'

type CasaServiceCardProps = {
    title: string;
    description: string;
    icon: string;
    alt: string;
    titleColor: string;
    bgColor: string;
    descriptionColor: string;
    bgCircleColor: string;
}

function ReusableCasaServiceCard({
  title,
  description,
  icon,
  alt,
  titleColor,
  bgColor,
  descriptionColor,
  bgCircleColor
}: CasaServiceCardProps) {
  return (
    <div
      className={`${bgColor} w-11/12 sm:w-10/12 md:w-6/12 lg:w-4/12 mx-auto p-4 sm:p-6 lg:p-6 rounded-2xl text-center lg:text-left`}
    >
      <h1 className={`${titleColor} text-2xl sm:text-3xl lg:text-3xl font-bold font-roboto mb-4`}>
        {title}
      </h1>

      <div
        className={`${bgCircleColor} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0`}
      >
        <Image src={icon} alt={alt} width={40} height={40} />
      </div>

      <p className={`${descriptionColor} text-sm sm:text-base md:text-lg lg:text-xl mt-4`}>
        {description}
      </p>
    </div>
  )
}

export default ReusableCasaServiceCard

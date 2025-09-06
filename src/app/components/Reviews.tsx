import React from 'react'
import ReUsableHeader from '../ReusableComponents.tsx/ReUsableHeader'
import Image from 'next/image'
import ReUsableReviewCard from '../ReusableComponents.tsx/ReUsableReviewCard'

function Reviews() {
  return (
    <div>
        <ReUsableHeader
            text1="Reviews"
            headerText="Hear What Customers Say About CASA!"
            text2="Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA."
        ></ReUsableHeader>

        <div className='w-11/12 mx-auto mb-40 gap-4 lg:flex justify-center items-center '>
      <ReUsableReviewCard
      logo='/adyen.png'
      text1='"Game-Changer for My Business!"'
      text2='CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.'
      img='/michael.png'
      name='Michael R'
      role='Restaurant Owner'
      />
      <ReUsableReviewCard
      logo='/axway.png'
      text1='"Fast, Reliable, and Stress-Free!"'
      text2='CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!'
      img='/sarah.png'
      name=' Sarah M.'
      role=' Café Owner'
      />
        </div>


        <div className='mt-20 flex items-center justify-center gap-4 w-11/12 mx-auto'>
        <div className='rounded-full p-2 bg-[#DFEDE3] '></div>
        <div className='rounded-full p-2 bg-[#0F4E23]'></div>
        <div className='rounded-full p-2 bg-[#DFEDE3]'></div>
        </div>
    </div>
  )
}

export default Reviews
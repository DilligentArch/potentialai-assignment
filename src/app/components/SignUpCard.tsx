import Image from 'next/image'
import React from 'react'
import ReUsableLowerCard from '../ReusableComponents.tsx/ReUsableLowerCard'

function SignUpCard() {
  return (
    <div className=' w-[450px] h-[706px] border-1 border-gray-100 rounded-xl max-w-96 p-2 w-full sm:w-10/12 md:w-8/12 lg:w-96 mx-auto'>
      <div className=' mx-auto p-4 bg-[#DAFFC2] rounded-xl mt-5 w-11/12 h-[360px]'>
        <h2 className='text-2xl sm:text-2xl font-roboto font-bold mb-5 text-center sm:text-left'>
          Sign Up
        </h2>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          className="bg-white mt-1 block w-full border border-gray-300 rounded-2xl p-2 text-sm sm:text-base"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          className="bg-white mt-4 block w-full border border-gray-300 rounded-2xl p-2 text-sm sm:text-base"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          className="bg-white mt-4 block w-full border border-gray-300 rounded-2xl p-2 text-sm sm:text-base"
        />
      </div>

      <ReUsableLowerCard
        t1="Connect Your Business"
        t2="Sign up and link your credit card processor or POS system with CASA. We support all major payment providers."
        t3="Fast approval & easy integration"
        t4="No impact on your credit score"
      ></ReUsableLowerCard>

     
    </div>
  )
}

export default SignUpCard

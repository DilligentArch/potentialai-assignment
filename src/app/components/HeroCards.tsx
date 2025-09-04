import Image from 'next/image'
import React from 'react'

function HeroCards() {
  return (
    <div className=' lg:w-11/12 mx-auto mt-20 mb-40  flex items-center justify-center gap-10 flex-col md:flex-row'>
        <Image src="/Card1.png" alt="HeroCard1" width={700} height={700} />
        <Image src="/Card2.png" alt="HeroCard2" width={700} height={700} />
        <Image src="/Card3.png" alt="HeroCard3" width={700} height={700} />

    </div>
  )
}

export default HeroCards
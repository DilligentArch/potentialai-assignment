import Image from 'next/image'
import React from 'react'

function WorkFlowCard() {
  return (
    <div className="w-11/12 mx-auto md:w-7/12   border border-gray-100 rounded-xl pt-5  h-auto">
                <div className="mx-auto p-4 rounded-xl mt-5 bg-[#F1F68E] h-auto ">
                    <div className="rounded-2xl p-4  mt-5 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-2 md:w-[307px] mx-auto ">
                        <div className="rounded-full bg-[#DEE385] p-3 flex items-center justify-center">
                            <Image src={"/leaf.png"} alt="balance" width={17} height={15} className='md:w-10 lg:w-6' />
                        </div>
    
                        <div className="text-center sm:text-left">
                            <h2 className="  md:text-2xl sm:text-lg font-roboto font-semibold">
                                Factoring Possible Amount.
                            </h2>
    
                        </div>
                    </div>
                    <div className='mb-27'>
                        <Image src="/Cardcontet.png" alt='card-content' width={400} height={200}></Image>
                    </div>
                
                </div>
    
            </div>
  )
}

export default WorkFlowCard
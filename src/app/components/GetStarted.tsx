import Image from "next/image"


function GetStarted() {
  return (
    <div className="  lg:w-10/12 mx-auto ">
        <p className="w-4/6  md:w-2/5 mx-auto bg-[#DFEDE3] rounded-full p-3 pl-10 text-center  lg:text-xl text-[#0F4E23]">Fast. secure. hassle-free</p>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 ">
        Get Paid Faster
        <Image src="/Illustration.png" alt="Icon" width={50} height={50}
        className="inline-block align-middle ml-2"
         /> Instant Cash For Businesses

      </h1>

      <p className="text-[#686868] text-center mt-5 ">Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.</p>

      <div className="bg-[#0F4E23] cursor-pointer text-white rounded-full px-6 py-3 mt-10 mb-10 hover:bg-green-800 transition duration-300 ease-in-out w-3/8 text-center md:w-1/5 mx-auto">
        Get Started
      </div>
    
    
    
    
    </div>
  )
}

export default GetStarted
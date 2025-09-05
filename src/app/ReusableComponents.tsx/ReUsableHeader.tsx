type Props = {
  text1: string;
  headerText: string;
  text2: string;
};

function ReUsableHeader({ text1, headerText, text2 }: Props) {
  return (
    <div className="w-11/12 mx-auto mt-40 mb-30">
     
      <p className="w-fit md:w-40 mx-auto bg-[#DFEDE3] text-sm sm:text-base md:text-xl text-[#0F4E23] font-semibold rounded-full px-5 py-2 md:p-5">
        {text1}
      </p>

     
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-roboto mt-6 md:mt-8 text-center w-full md:w-7/12 mx-auto">
        {headerText}
      </h2>

    
      <p className="w-full sm:w-10/12 md:w-7/12 mx-auto text-base sm:text-lg md:text-2xl text-center text-[#686868] mt-5 md:mt-7">
        {text2}
      </p>
    </div>
  );
}

export default ReUsableHeader;

import ReUsableHeader from "../ReusableComponents.tsx/ReUsableHeader"
import BalanceCard from "./BalanceCard"
import ReceieveMoneyAndUsersCard from "./ReceieveMoneyAndUsersCard"
import SignUpCard from "./SignUpCard"


function HowItWorks() {
  return (
    <div>
      <ReUsableHeader
        text1="How it works"
        headerText=" Simple & Fast Receive Your Payment in 3 Steps!"
        text2="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
      ></ReUsableHeader>
      <div className="flex justify-center mt-5 items-center ">
        <SignUpCard></SignUpCard>
        <BalanceCard></BalanceCard>
        <ReceieveMoneyAndUsersCard></ReceieveMoneyAndUsersCard>
      </div>

    </div>
  )
}

export default HowItWorks
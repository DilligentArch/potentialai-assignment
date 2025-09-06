import React from 'react'
import MoneyReceievedCard from './MoneyReceievedCard'
import TopUsers from './TopUsers'
import Offers from './Offers'

function SaleChartSection() {
  return (
    <div className='bg-[#F8F8F8]  w-10/12 mx-auto relative justify-around '>

       <div className='lg:flex lg:justify-between lg:items-center lg:gap-10 lg:pt-20 pt-10 pb-10 items-center '>
          <MoneyReceievedCard ></MoneyReceievedCard>
          <Offers></Offers>
       </div>
        <TopUsers ></TopUsers>
    </div>
  )
}

export default SaleChartSection
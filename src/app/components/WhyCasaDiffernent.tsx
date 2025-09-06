import React from 'react'
import ReUsableHeader from '../ReusableComponents.tsx/ReUsableHeader'
import SaleChartSection from './SaleChartSection'

function WhyCasaDiffernent() {
  return (
    <div className='mt-20'>
        <ReUsableHeader
        text1="Why casa different"
        headerText=" Why CASA Stands Out from the Rest"
        text2="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
        ></ReUsableHeader>
        <SaleChartSection></SaleChartSection>

    </div>
  )
}

export default WhyCasaDiffernent
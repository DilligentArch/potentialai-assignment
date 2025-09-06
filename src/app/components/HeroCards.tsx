import React from 'react'
import SalesOverviewCard from './SalesOverviewCard'
import FactoringPossibleAmount from './FactoringPossibleAmount'
import WorkFlowCard from './WorkFlowCard'

function HeroCards() {
  return (
    <div className=' lg:w-11/12 mx-auto mt-20 mb-40 items-stretch  lg:flex  justify-center gap-10 flex-col md:flex-row'>
        <SalesOverviewCard></SalesOverviewCard>
        <FactoringPossibleAmount></FactoringPossibleAmount>
        <WorkFlowCard></WorkFlowCard>

    </div>
  )
}

export default HeroCards
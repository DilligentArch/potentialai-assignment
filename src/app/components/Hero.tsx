import GetStarted from "./GetStarted"
import HeroCards from "./HeroCards"


function Hero() {
  return (
    <div className="lg:w-3/5 mx-auto mt-40">
        <GetStarted></GetStarted>
        <HeroCards></HeroCards>
    </div>
  )
}

export default Hero
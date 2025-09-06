import AboutCasa from "./components/AboutCasa";
import BottomHero from "./components/BottomHero";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Priceing from "./components/Priceing";
import Reviews from "./components/Reviews";
import TrustedByCompanies from "./components/TrustedByCompanies";
import WhyCasaDiffernent from "./components/WhyCasaDiffernent";






export default function Home() {
  return (
    <div>
     <Head></Head>
     <Hero></Hero>
     <TrustedByCompanies></TrustedByCompanies>
     <AboutCasa></AboutCasa>
     <HowItWorks></HowItWorks>
     <WhyCasaDiffernent></WhyCasaDiffernent>
     <Reviews></Reviews>
     <Priceing></Priceing>
     <BottomHero></BottomHero>
     <Footer></Footer>

    </div>
  )
}

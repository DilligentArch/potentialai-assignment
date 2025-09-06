import AboutCasa from "./components/AboutCasa";
import BottomHero from "./components/BottomHero";
import Contact from "./components/Contact";
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
    <div className="max-w-screen-2xl mx-auto">
     <Head></Head>
     <Hero></Hero>
     <TrustedByCompanies></TrustedByCompanies>
     <AboutCasa></AboutCasa>
     <HowItWorks></HowItWorks>
     <WhyCasaDiffernent></WhyCasaDiffernent>
     <Reviews></Reviews>
     <Priceing></Priceing>
     <Contact></Contact>
     <BottomHero></BottomHero>
     <Footer></Footer>

    </div>
  )
}

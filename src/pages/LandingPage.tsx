import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import Navbar from "../components/Navbar"
import SecondInfoSection from "../components/SecondInfoSection"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <SecondInfoSection />
    </div>
  )
}

export default LandingPage
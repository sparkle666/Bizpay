import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import Navbar from "../components/Navbar"
import SecondInfoSection from "../components/SecondInfoSection"
import ThirdSectionScrollable from "../components/ThirdSectionScrollable"
import SimplifyPayments from "../components/SimplifyPayments"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <SecondInfoSection />
      <ThirdSectionScrollable />
      <SimplifyPayments />
    </div>
  )
}

export default LandingPage
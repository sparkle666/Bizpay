import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import Navbar from "../components/Navbar"
import SecondInfoSection from "../components/SecondInfoSection"
import ThirdSectionScrollable from "../components/ThirdSectionScrollable"
import SimplifyPayments from "../components/SimplifyPayments"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="bg-[#F7F7F7] text-[#111111]">
      <Navbar />
      <Hero />
      <InfoSection />
      <SecondInfoSection />
      <ThirdSectionScrollable />
      <SimplifyPayments />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage
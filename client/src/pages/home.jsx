import CallToAction from "../components/home/cta"
import { Features } from "../components/home/features"
import Footer from "../components/home/footer"
import { Hero } from "../components/home/hero"
import { Testimonials } from "../components/home/testimonials"
import { TopBanner } from "../components/home/top_banner"

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default HomePage
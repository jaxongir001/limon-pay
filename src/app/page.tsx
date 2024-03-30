import FeatureSection from "@/components/Cards"
import Hero from "@/components/Hero"
import HeroSection from "@/components/1Sectrion"
import VideoGrid from "@/components/Youtube"

const Home = () => {
  return (
    <div>
      <Hero/>
      <VideoGrid/>
      <FeatureSection/>
      <HeroSection/>
    </div>
  )
}

export default Home

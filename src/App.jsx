import React from 'react'
import "../src/App.css"
import Navbar from './Components/HeroHeader/Navbar/Navbar'
import Header from './Components/HeroHeader/Header/Header'
import SocialProof from './Components/HeroHeader/SocialProof/SocialProof'
import FeaturesSection from './Components/HeroHeader/FeatureSection/FeatureSection'
import Testimonial from './Components/HeroHeader/Testimonial/Testimonial'
import SubFeature from './Components/HeroHeader/SubFeature/SubFeature'
import FAQSection from './Components/HeroHeader/F&QSection/FAQSection'
import BlogSection from './Components/HeroHeader/BlogSection/BlogSection'
import CTASection from './Components/HeroHeader/CTASection/CTASection'
import Footer from './Components/HeroHeader/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SocialProof/>
      <FeaturesSection/>
      <Testimonial/>
      <SubFeature/>
      <FAQSection/>
      <BlogSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App

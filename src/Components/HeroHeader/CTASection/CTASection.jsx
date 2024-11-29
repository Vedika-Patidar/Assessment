import React from 'react'
import "./CTASection.css"
const CTASection = () => {
  return (
    <div className="cta_section">
      <h1>Start your free trial</h1>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div className='cta-button'>
        <button className='learn-btn'>Learn More</button>
        <button className='start-btn'>Get Started</button>
      </div>
    </div>
  );
}

export default CTASection

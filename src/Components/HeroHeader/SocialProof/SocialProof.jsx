import React from 'react'
import "./SocialProof.css"
import BoltShift from "../../../assets/BoltShift.png"
import LightBox from "../../../assets/LightBox.png"
import FeatherDev from "../../../assets/FeatherDev.png";
import Spherule from "../../../assets/Spherule.png"
import GlobalBank from "../../../assets/GlobalBank.png";
import Nietzsche from "../../../assets/Nietzsche.png";


const SocialProof = () => {
  const companies = [
    {  logo: BoltShift },
    {  logo: LightBox },
    {  logo: FeatherDev },
    {  logo: Spherule },
    {  logo: GlobalBank },
    {  logo: Nietzsche },
  ];

  return (
    <section className="partner-logos">
      <p className="partner-title">Join 4,000+ companies already growing</p>
      <div className="logos-container">
        {companies.map((company, index) => (
          <div key={index} className="logo-item">
            <img
              src={company.logo}
              className="logo-image"
            />
            
          </div>
        ))}
      </div>
      
    </section>
  );
};
export default SocialProof

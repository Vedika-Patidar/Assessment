import React from 'react'
import "./Header.css"
import Dashboard  from "../../../assets/dashboard.png"
import { FaArrowRight, FaCirclePlay } from "react-icons/fa6";

const Header = () => {
  return (
    <section className='header-section'>
      <div className="header">
        <div className="header-feature">
          <p>New feature</p>
          <a href="#">
            Check out the team dashboard <FaArrowRight />
          </a>
        </div>
        <h1 className="header-title">Beautiful analytics to grow smarter</h1>
        <p className="header-description">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="demo-btn">
            <FaCirclePlay /> Demo
          </button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
      <img src={Dashboard} alt="" />
      
    </section>
  );
};

export default Header

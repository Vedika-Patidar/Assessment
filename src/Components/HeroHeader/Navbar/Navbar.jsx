import React from 'react'
import "./Navbar.css"
import Logo from "../../../assets/UnitedUI_Logo.png"
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button>Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar

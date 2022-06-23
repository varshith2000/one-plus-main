import React, { useState } from "react";
// import{ link } from "react-router-dom"
import logo from "../images/Logo_001.png";

function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  const[ navbar,setNavbar] = useState(false);



const changeBackground = () =>{
  if(window.scrollY >=40){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
}
window.addEventListener('scroll',changeBackground);


  return (
    <>
    <div className ={ navbar ? 'top-header-section active ': 'top-header-section '}>
      <div className="d-flex justify-content-between">
        <div className="logo">
       <a href="index.html">   <img src={logo} /></a>
        </div>
        <div
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="menu nav-links d-flex flex-row align-items-center">
            <li className="list-group list-group-flush">
              <a href="index.html" className="text-decoration-none">
                Home
              </a>
            </li>
            <li className="list-group list-group-flush  ">
              <a href="#about-us" className="text-decoration-none">
                About
              </a>
            </li>
            <li className="list-group list-group-flush">
              <a href="#service" className="text-decoration-none">
                Services
              </a>
            </li>
            <li className="list-group list-group-flush">
              <a href="#Team" className="text-decoration-none">
                Team
              </a>
            </li>
            <li className="list-group list-group-flush">
              <a href="#contact" className="text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
      </div> 
    </>
  );
}

export default Menu;
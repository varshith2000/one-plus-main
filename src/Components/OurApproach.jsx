import React from "react";
// import Collapsible from 'react-collapsible';
// import { Parallax } from "react-scroll-parallax";
import img3 from "../images/6.png";


function OurApproach() {
   return (
      <>

         <div className="our-approach-main" id="service">
            
                  <div className="our-approach-main-wrapper">
                     <div className="our-approach">
                        <div className="our-approach-img">
                           <span className="special-char-medium text-white absolute-middle-center position-absolute fas fa-quote-left"></span>
                           <p>Partner with us
                              <br />and work with a
                              <br /> cross-border team that delivers cross-platform solutions.
                           </p>
                           <img src={img3} alt=".." className="approach-img" />
                        </div>
                        <div className="our-approach-content">
                           {/* <p>Partner with us and work with a
                      Cross-border team that delivers cross-platform solutions.
                      </p> */}
                           <h3>We design brand and marketing experiences that are on the cutting edge of digital, so that you always engage with the right audience.</h3>
                           <ul>
                              <div className="d-flex gap-2">
                                 <li>Customer Insights </li>
                                 <li>Market Insights </li>
                                 <li>Branding Strategy</li>
                              </div>
                              <div className="d-flex gap-2">

                                 <li>Consumer Journey Mapping</li>
                                 <li>Digital Marketing Strategy</li>
                              </div>
                              <div className="d-flex gap-2">

                                 <li>Performance Marketing Strategy</li>
                                 <li>Brand Identity Design </li>
                              </div>
                              <div className="d-flex gap-2">
                                 <li>Digital & Social Media Campaign </li>
                                 <li>SEO & SEM Management</li>
                              </div>
                           </ul>
                        </div>
                     </div>
                  </div>


         </div>
      </>
   )
};

export default OurApproach;
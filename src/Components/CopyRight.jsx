import React from "react";
import logo from "../images/Logo_001.png";


function CopyRight(){
    return(
        <>
        <div className="copy-right">
            <div className=" container d-flex justify-content-between align-items-center">
              <div className="logo">
              <a href="index.html">  </a>
              </div>
              <div className="copy-right-text">
               <p> Copyrights @OnePlusMarketing</p>
             </div>
             <div className="social">
                <ul className=" d-flex">
                   <li><a href="fb.com"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="youtube.com"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            </div> 
          </div>

        </>
    )
};

export default CopyRight;
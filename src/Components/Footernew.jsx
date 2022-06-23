import React from "react";
// import logo from "../images/logo.png";

function Footernew() {
    return (
        <>
            <div className="Footer" id="contact">
                <div className="container d-flex justify-content-between">
                    <div className="Footer-title">
                        <h2>Get in touch with us </h2>
                        <div className="Footer-btn">
                            <a href="mailto:hello@oneplusmarketing.co.uk">
                                <button>CONTACT US</button>
                            </a>
                        </div>
                    </div>
                    
                        <div className=" location">
                            <i class="fas fa-map-marker"></i>
                            <span>Visit our office</span>
                            <p>
                                Gresham House, 24 Holborn Viaduct,
                                London, England, EC1A 2BN
                            </p>
                            <a href="https://www.google.com/maps/dir//Gresham+House,+London+EC1A+2BN,+United+Kingdom/@51.5170006,-0.1047972,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48761b528ff5348b:0x5ad6d458c32f292c!2m2!1d-0.1047565!2d51.5170021" target="_blank">Get directions </a>
                        </div>
                        <div className=" location">
                            <i class="fas fa-envelope"></i>
                            <span>E-mail us</span>
                            <p>
                                hello@oneplusmarketing.co.uk
                            </p>
                            <a href="mailto:hello@oneplusmarketing.co.uk">Send e-mail </a>
                        </div>
        
                </div>

            </div>

        </>


    )
}
export default Footernew;
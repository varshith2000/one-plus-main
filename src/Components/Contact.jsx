import React from "react";

function Contact() {
  return (
    <>
      <div className="Contact">
        <div className=" container d-flex justify-content-between">
          <div className=" location">
            <i class="fas fa-map-marker"></i>
            <span>Visit our office</span>
            <p>
              Gresham House, 24 Holborn Viaduct, London, England, EC1A 2BN
            </p>
            <a href="">Get directions </a>
          </div>
          <div className=" location">
            <i class="fas  fa-comments"></i>
            <span>Let's talk</span>
            <p>
              Phone:  +1 123 456 1234 <br />
              Phone:  +1 123 654 3678
            </p>
            <a href="">Call us </a>
          </div>
          <div className=" location">
            <i class="fas fa-envelope"></i>
            <span>E-mail us</span>
            <p>
              Email hello@oneplus.com <br />
              Email info@oneplus.com
            </p>

            <a href="">Send e-mail </a>
          </div>

        </div>
      </div>

    </>
  )
};
export default Contact;
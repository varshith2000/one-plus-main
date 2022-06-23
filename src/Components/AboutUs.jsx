import React from "react";
import img3 from "../images/image4.png";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : "open"}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
const Accodian = () => (
  <div className="About-section" id="aboutus">
    <div className="container">
      <div className="About-wrapper d-flex flex-column justify-content-center align-items-center section-title">
        <h2>WHY US </h2>
      </div>
      <div className="our-approach-section">
        <div className="our-approach-section-box">
          <h4>Global Experience</h4>
          <p>We are a team of consultants with an immersive experience in global businesses. Our vision is to work with our clients as partners; to deliver adaptive, effective and result driven solutions in response to the VUCA world.</p>
        </div>
        <div className="our-approach-section-box">
          <h4>Customized Package</h4>
          <p>Our aim is to deliver concise, objective driven, ROI focused solutions. Hence,we provide personalised, expert attention in unique package depending on client’s business goal, budget and timeline.</p>
        </div>
        <div className="our-approach-section-box">
          <h4>Cultural Integration</h4>
          <p>The Internet has made the world a much flatter place. It's now or never. Our marketing expertise will create brand identity for your business, across geographies, build strong awareness and customer loyalty amongst the ever dynamic global consumer behaviour.</p>
        </div>
      </div>
      <div className="About-section-btn text-center">
        <a href="#contact"><button>Work With Us</button></a>
      </div>

    </div>
    {/*  */}
    {/* <div className="our-approach-bottom">
      <div className="our-approach-box">
        <h1>01</h1>
        <h4>Evaluate & Define</h4>
        <p>We audit how customers interact with your brand and work with your marketing team to define objectives and unlock growth. </p>
      </div>
      <div className="our-approach-box">
        <h1>02</h1>
        <h4>Strategise</h4>
        <p>We devise compelling strategies to affect how consumers think, feel and act on your products, services and therefore, your brand. </p>
      </div>
      <div className="our-approach-box">
        <h1>03</h1>
        <h4>Design & Execute</h4>
        <p>We partner with your team to co-create solutions and deliver them in-house or through our network of creative talent. </p>
      </div>
    </div> */}

    {/*  */}
  </div>
);

export default Accodian;
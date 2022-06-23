import React from 'react';
import './css/index.css';
import Menu from './Components/Menu';
import WhatMakeUs from './Components/WhatMakeUs';
// import Test from './Components/test';
import Accordion from './Components/AboutUs';
import Bannersection from './Components/Bannersection';
// import OurApproach from './Components/OurApproach';
import OurService from './Components/OurService';
import OurTeam from './Components/OurTeam';
// import FooterContact from './Components/FooterContact';
import Footernew from './Components/Footernew';
// import Contact from './Components/Contact';
import CopyRight from './Components/CopyRight';




function App() {
  return (
    <>
      <div>
          <Menu/>
          <Bannersection/>
          <WhatMakeUs/>
          {/* <Test/> */}
          <Accordion/>
          {/* <OurApproach/> */}
          <OurService/>
          <OurTeam/>
          {/* <FooterContact/>  */}
          <Footernew/>
          {/* <Contact/> */}
          <CopyRight/>
        
          
      </div>
    </>
  );
}

export default App;

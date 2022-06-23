import React from "react";

function Bannersection() {
    return (
        <>
            <section id="hero-1">
                <div className="Banner-section">
                    {/* <div class="bg-extra-dark-gray bg-overlay"></div> */}
                    <div className="container">
                        <div className="Banner-wrapper">
                            <h2 className="">Unique marketing solutions <br/> for asian brands</h2>
                           <div className="Banner-btn">
                          <a href="#service"><button>Find Out More</button> </a>  
                           </div>
                            {/* <div className="main-banner-text">
                                <h1 className="d-flex">EMPATHISE
                                    CONNECT
                                    CONSULT
                                </h1>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Bannersection;
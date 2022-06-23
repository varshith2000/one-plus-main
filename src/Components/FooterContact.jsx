import React from "react";
// import img1 from "../images/6.png";



function FooterContact() {
    return (
        <>
            <div className="Footer" id="contact">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="section-title">
                                <h2>Contact us</h2>
                                {/* <p>Ways to reach us</p> */}
                            </div>
                             <form name="sentMessage">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" required="" />
                                            <p className="help-block text-danger"></p>
                                        </div></div><div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required="" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required=""></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">Send message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default FooterContact;
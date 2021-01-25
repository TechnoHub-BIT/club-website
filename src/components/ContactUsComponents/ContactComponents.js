import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import ContactUs from './ContactUsComponents';
import './ContactUsStyles.css'
import MapIframe from './MapIFrame';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Fade } from "react-reveal";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.949613255931!2d81.29698091542912!3d21.1941604874859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cf9cb28d18f%3A0x88523ddfbff6ee3f!2sBhilai%20Institute%20of%20Technology%20Durg!5e0!3m2!1sen!2sin!4v1602619858016!5m2!1sen!2sin'
        };
    }

    render() {
        return(
            <React.Fragment>
                <HeaderTitle heading="CONTACT US" image="contact-us.jpg" />
                <div className="contactus-container">
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-phone-alt" title="Contact Us" status="active" />
                    </Breadcrumb>
                    <div>
                        <div className="landing">
                            <Fade up>
                                <div className="content">
                                    <div className="heading">Reach Us At</div>
                                    <p className="text">
                                        TechnoHub<br />
                                        Bhila Institute of Technology, Durg<br />
                                        Chhattisgarh- 491001<br /><br />
                                        <a href="tel:+916261731565">
                                            <button type="button"><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Call Now</button>
                                        </a>
                                        <a href="mailto:bit.technohub@gmail.com">
                                            <button type="button"><i className="fas fa-envelope"></i>&nbsp;&nbsp;Mail Us</button>
                                        </a>
                                    </p>
                                </div>
                                <img src="./assets/images/contact-us/background.jpg" alt="Contact Us" />
                            </Fade>
                        </div>
                        <Fade up>
                            <div className="row mt-5">
                                <div className="col-12 col-md-12">
                                    <div>
                                        <MapIframe source={this.state.src} />
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <ContactUs />
                            </div>
                        </Fade>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
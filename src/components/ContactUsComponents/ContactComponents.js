import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import ContactUs from './ContactUsComponents';
import './ContactUsStyles.css'
import MapIframe from './MapIFrame';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
// import NavbarPage from '../HeaderComponents/NavbarComponents/NavbarComponent'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.949613255931!2d81.29698091542912!3d21.1941604874859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cf9cb28d18f%3A0x88523ddfbff6ee3f!2sBhilai%20Institute%20of%20Technology%20Durg!5e0!3m2!1sen!2sin!4v1602619858016!5m2!1sen!2sin'
        };
    }

    render() {
        return(
            <div className="contactus-container">
                <HeaderTitle heading="CONTACT US" />
                <Breadcrumb>
                    <BreadcrumbItem title="Home" path="/" />
                    <BreadcrumbItem title="Contact Us" status="active" />
                </Breadcrumb>
                <div className="container" >
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h3>Reach Us Here</h3>
                            <address>
                                TechnoHub<br />
                                Bhilai Institute of Technology, Durg<br />
                                Chhattisgarh 491001<br />
                                <i className="fas fa-phone-alt"></i> <a href="tel:+916261731565">+91-6261731565</a><br />
                                <i className="fas fa-envelope"></i> <a href="mailto:bit.technohub@gmail.com">bit.technohub@gmail.com</a>
                            </address>
                            <div>
                                <a role="button" className="btn btn-primary" href="tel:+916261731565"><i className="fas fa-phone-alt"></i> Call</a>
                                {/* <a role="button" className="btn btn-info" href="http://skype.com/"><i className="fa fa-skype"></i> Skype</a> */}
                                <a role="button" className="btn btn-success" href="mailto:bit.technohub@gmail.com"><i className="fas fa-envelope"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-12">
                            <div>
                                <MapIframe source={this.state.src} />
                            </div>
                        </div>
                    </div>
                    <ContactUs />
                </div>
            </div>
        );
    }
}

export default Contact;
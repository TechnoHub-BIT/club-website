import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUsComponents';
import './ContactUsStyles.css'
import MapIframe from './MapIFrame';
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
            <div className="container" >

        {/* <NavbarPage/> */}
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>

             <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        TechnoHub,  <br />
                        Bhilai Institute of Technology, Durg,<br />
                        Chhattisgarh 491001<br />
                        <i className="fa fa-phone"></i>: +91-7722874355<br />
                        <i className="fa fa-fax"></i>: +91-7722874355<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:bit.technohub@gmail.com">bit.technohub@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <MapIframe source={this.state.src} />
                     
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+917722874355"><i className="fa fa-phone"></i> Call</a>
                        {/* <a role="button" className="btn btn-info" href="http://skype.com/"><i className="fa fa-skype"></i> Skype</a> */}
                        <a role="button" className="btn btn-success" href="mailto:bit.technohub@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div>
                    <ContactUs/>
                </div>

        </div>
        </div>

    );
}
}
export default Contact;
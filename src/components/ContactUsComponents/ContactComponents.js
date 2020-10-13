import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUsComponents';
import './ContactUsStyles.css'
// import NavbarPage from '../HeaderComponents/NavbarComponents/NavbarComponent'
class Contact extends Component {

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
                    <img src='assets/images/sitmap.png' height="150" width="280" alt='SiteMap' />
                     
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
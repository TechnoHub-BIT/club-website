import React from 'react';
// import { Link } from 'react-router-dom';
import photos from '../img/footer_img/randomName1.jpeg';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="single-footer-widget footer_1">
                        <a href="index.html"> <img src='assets/images/logowhite.png' height="160" width="280" alt="" /> </a>
                    </div>
                </div>

               
                <div className="col-sm-6 col-md-4 col-xl-3 ">
                    <div className="single-footer-widget footer_3">
                        <h2 className="ourg"> Our Gallery</h2>
                        <div className="footer_img">
                                <div className="single_footer_img">
                                <img src={photos} height="50" width="50" alt="" />
                                
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName2.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName3.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName4.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName5.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName6.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName7.jpeg" height="50" width="50" alt="" />
                            </div>
                            
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName8.jpeg" height="50" width="50" alt="" />
                            </div>
                            <div className="single_footer_img">
                                <img src="/assets/images/footer_img/randomName9.jpeg" height="50" width="50" alt="" />
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="single-footer-widget footer_icon">
                        <h4 id="ci">Contact Info</h4>
                        <p id="fc">TechnoHub, Bhilai Institute of Technology, Durg, Chhattisgarh 491001</p>
                        <ul>
                            <li><a href="#somethingtoremovewarning"><i className="ti-mobile"></i>+91-7722874355</a></li>
                            <li><a href="mailto:bit.technohub@gmail.com? subject=subject text">bit.technohub@gmail.com</a></li>
                            <li><a href="https://www.instagram.com/bit.technohub/">Follow Us On Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
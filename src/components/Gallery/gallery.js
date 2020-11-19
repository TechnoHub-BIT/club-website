import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import "./gallery.css";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

class gallery extends Component {
  
    state = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 2.
            },
            1000: {
                items: 3,
            },
        }
    }

    render() {
        return(
            <React.Fragment>    
                <div className="gallery-container">
                    <HeadingTitle heading="GALLERY" />
                    <Breadcrumb>
                        <BreadcrumbItem title="Home" path="/" />
                        <BreadcrumbItem title="Gallery" status="active" />
                    </Breadcrumb>
                    <div className="container">
                        <div className="row">
                            <div className="title">
                                <h2>OUR GALLERY</h2>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <h5>Tech-Expo @ Ojas2019</h5>
                            <div className="container">
                                <div className="gallery">
                                    <OwlCarousel
                                        className="owl-theme"
                                        margin={10}
                                        loop
                                        autoplay
                                        autoplayTimeout={1000}
                                        autoplayHoverPause
                                        dotsEach
                                        responsive={this.state.responsive}
                                    >
                                        <div>
                                            <img src="/assets/images/footer_img/randomName2.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName3.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName4.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName5.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName6.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName7.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName8.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/footer_img/randomName9.jpeg" alt="" />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h5>Robotics Workshop</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default gallery;
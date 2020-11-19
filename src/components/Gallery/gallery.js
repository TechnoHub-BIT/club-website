import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import "./gallery.css";
import HeadingTitle from "../HeaderComponents/HeaderTitle";

const gallery = (props) => {
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
                        <div className="gallery_img">
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName2.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName3.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName4.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName5.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName6.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName7.jpeg" height="100" width="100" alt="" />
                            </div>
                            
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName8.jpeg" height="100" width="100" alt="" />
                            </div>
                            <div className="single_gallery_img">
                                <img src="/assets/images/footer_img/randomName9.jpeg" height="100" width="100" alt="" />
                            </div>
                           
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

export default gallery;
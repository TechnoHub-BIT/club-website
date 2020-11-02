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
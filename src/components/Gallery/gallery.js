import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import "./gallery.css";

const gallery = (props) => {
    return(
        <React.Fragment>    
            <div className="gallery-container">
                <Breadcrumb>
                    <BreadcrumbItem title="Home" path="/" />
                    <BreadcrumbItem title="Gallery" status="active" />
                </Breadcrumb>
                <div className="container">
                    <h1> OUR GALLERY </h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default gallery;
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
            </div>
        </React.Fragment>
    );
}

export default gallery;
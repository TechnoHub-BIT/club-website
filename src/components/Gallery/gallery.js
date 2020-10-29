import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./gallery.css";

const gallery = (props) => {
    return(
        <React.Fragment>    
            <div className="gallery-container">
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Gallery</BreadcrumbItem>
                </Breadcrumb>
                </div>
            </div>
            <div className="container">
                <h1> OUR GALLERY </h1>
            </div>
            </div>
            
        </React.Fragment>
    );
}

export default gallery;
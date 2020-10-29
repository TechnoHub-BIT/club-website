import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const achievements = (props) => {
    return(
        <React.Fragment>    
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Achievements</BreadcrumbItem>
                </Breadcrumb>
                </div>
            </div>
        </React.Fragment>
    );
}

export default achievements;
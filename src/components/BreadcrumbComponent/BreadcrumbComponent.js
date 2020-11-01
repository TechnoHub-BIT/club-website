import React from "react";
import "./BreadcrumbComponent.css";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return(
        <div>
            <ul className="breadcrumbCont">
                { props.children }
            </ul>
            <hr />
        </div>
    );
};

const BreadcrumbItem = (props) => {
    const status = props.status;

    let className = "link";
    let title = <Link to={ props.path }>{ props.title }</Link>;

    if(status != null) {
        className = "active";
        title =  props.title;
    }

    return(
        <li className={ className }>
            { title }
        </li>
    );
};

export { Breadcrumb, BreadcrumbItem };
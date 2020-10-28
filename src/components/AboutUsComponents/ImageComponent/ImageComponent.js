import React from "react";
import "./ImageComponent.css";

const image = (props) => {
    return(
        <div className="personCard">
            <img className="personImage" src={props.path} alt={props.name} />
            <div className="personDetails">
                <h4>{props.name}</h4>
                <p>
                    <span className="personPost">{props.post}</span>
                    <br />
                    <i className="fa fa-phone"></i><a href={"tel:+91"+props.contact}>+91-{props.contact}</a>
                </p>
            </div>
        </div>
    );
};

export default image;
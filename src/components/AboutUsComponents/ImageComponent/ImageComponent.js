import React from "react";
import "./ImageComponent.css";

const image = (props) => {
    const contact = parseInt(props.contact);
    let text = null;
    if(contact > 0) {
        text = 
            <div>
                <i className="fa fa-phone"></i> <a href={"tel:+91"+props.contact}>+91-{props.contact}</a>
            </div>;
    }

    const post = props.post;
    let text2 = null;
    if(post != null) {
        text2 = 
            <div>
                <span className="personPost">{props.post}</span>
            </div>;
    }

    return(
        <div className="personCard">
            <img className="personImage" src={props.path} alt={props.name} />
            <div className="personDetails">
                <h4>{props.name}</h4>
                <p>
                    {text2}
                    <br />
                    {text}
                </p>
            </div>
        </div>
    );
};

export default image;
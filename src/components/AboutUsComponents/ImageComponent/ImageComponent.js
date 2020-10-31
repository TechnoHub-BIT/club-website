import React from "react";
import "./ImageComponent.css";

const image = (props) => {
    const path = props.path;
    let img = null;
    if(path != null) {
        img = <img className="personImage" src={ props.path } alt={ props.name } />
    }

    const contact = parseInt(props.contact);
    let text = null;
    let cta = null;
    if(contact > 0) {
        text = 
            <div>
                <br />
                <i className="fa fa-phone-alt"></i> <a href={"tel:+91"+props.contact}>+91-{props.contact}</a>
            </div>;
        
        cta =
            <a href={"tel:+91"+props.contact} className="cta">
               <i className="fas fa-phone-alt"></i> Call Now
            </a>;
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
            { img }
            <div className="personDetails">
                <h4>{props.name}</h4>
                <p>
                    {text2}
                    {text}
                </p>
            </div>
            <div className="personBranch">
                <p>
                    { props.children }
                    <br />
                    { cta }
                </p>
            </div>
        </div>
    );
};

export default image;
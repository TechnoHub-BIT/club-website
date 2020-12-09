import React from "react";
import { Link } from "react-router-dom";

const singleEvent = (props) => {
    return(
        <Link to={ props.to }>
            <div className="eventsCard">
                <div className="cardImage">
                    <img src={ props.img } alt={ props.title } />
                </div>
                <div className="cardBody">
                    <h2 className="cardTitle">{ props.title }</h2>
                    <h5 className="cardSubtitle">{ props.subtitle }</h5>
                </div>
            </div>
        </Link>
    );
}

export default singleEvent;
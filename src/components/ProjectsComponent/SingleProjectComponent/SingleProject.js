import React from "react";

const singleProject = (props) => {
    return(
        <div className="singleCard">
            <div className="cardHeader">
                <img className="cardImage" src={ props.img } alt={ props.title } />
            </div>
            <div className="cardBody">
                <h3>{ props.title }</h3>
                <p>
                    { props.children }
                </p>
            </div>
        </div>
    );
}

export default singleProject;
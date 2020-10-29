import React from "react";
import "./SingleAchievement.css";

const achievement = (props) => {
    const path = props.path;
    let img = null;
    if(path != null) {
        img = <img className="achievementImage" src={ path } alt={ props.name } />;
    }

    return(
        <div className="achievementCard">
            { img }
            <div className="achievementDetails">
                <h4>{ props.name }</h4>
                <p>
                    { props.children }
                </p>
            </div>
        </div>
    );
}

export default achievement;
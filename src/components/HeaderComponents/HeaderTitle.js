import React from "react";
import "./HeaderTitle.css";

const headerTitle = (props) => {
    return(
        <div>
            <h2 className="headerTitle">{ props.heading }</h2>
        </div>
    );
}

export default headerTitle;
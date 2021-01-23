import React from "react";

const blogHeading = (props) => {
    return(
        <div>
            <h2 className="headerTitle">{ props.title }</h2>
            <h4 className="headerAuthor">{ props.author }</h4>
        </div>
    );
};

export default blogHeading;
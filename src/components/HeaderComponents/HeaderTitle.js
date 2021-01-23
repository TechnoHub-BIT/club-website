import React from "react";
import "./HeaderTitle.css";

const headerTitle = (props) => {

    const checkAuthor = props.author;
    let author = null;
    if(checkAuthor != null) {
        author = <h4 className="headerAuthor">by { props.author }</h4>;
    }

    const checkDate = props.date;
    let date = null;
    if(checkDate != null) {
        date = <h5 className="headerDate">Posted on { props.date }</h5>;
    }

    let url = "./assets/images/header/" + props.image;

    if(props.blogImage != null)
        url = "https://drive.google.com/uc?export=view&id=" + props.blogImage;

    const styling = {
        backgroundImage: "url(" + url + ")",
    };

    return(
        <div className="headerTitleCont" style={styling}>
            <div className="animation">
                <h2 className="headerTitle">{ props.heading }</h2>
                { author }
                { date }
            </div>
        </div>
    );
}

export default headerTitle;
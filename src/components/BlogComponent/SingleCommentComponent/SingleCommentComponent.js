import React from "react";
import Moment from "moment";
import ProfileImage from "../../../img/profile-user.svg";

const SingleComment = (props) => {
  return (
    <React.Fragment>
      <div className="singleComment">
        <div className="left">
          {props.user.photourl ? (
            <img src={props.user.photourl} alt="Profile" />
          ) : (
            <img src={ProfileImage} alt="Profile" />
          )}
        </div>
        <div className="right">
          <h5>
            {props.user.fullname}
            <span className="comment">{props.user.comment}</span>
          </h5>
          <div className="date">
            {Moment(props.user.date).format("LL")}
            {props.user.fullname === props.currentProfile.fullname ||
            props.currentProfile.id === 1 ||
            props.currentProfile.id === 3 ||
            props.blogEdit.blogauthor == props.currentProfile.fullname ? (
              <span className="actionBtns">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={props.onDelete}
                >
                  Delete
                </button>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleComment;

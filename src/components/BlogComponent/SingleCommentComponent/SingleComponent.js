import React, { useState } from "react";
import Moment from "moment";
import ProfileImage from "../../../img/profile-user.svg";
import EditCommentModal from "./EditCommentModal";

const SingleComment = (props) => {
  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const openEditModal = () => {
    showModal(
      <EditCommentModal
        comment={props.user.comment}
        action={closeModal}
        close={() => closeModal()}
        onChange={props.onChangeEdit}
        onSave={props.onEdit}
      />
    );
  };

  return (
    <React.Fragment>
      {modal}
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
            <input className="comment" value={props.user.comment} readOnly />
          </h5>
          <div className="date">
            {Moment(props.user.date).format("ll")}
            {props.user.fullname === props.currentProfile.fullname ? (
              <span className="actionBtns">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openEditModal}
                >
                  Edit
                </button>
              </span>
            ) : null}
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
